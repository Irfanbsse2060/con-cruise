import {
  NotFoundException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto, CreateUserDto, QueryUserDto } from './dto';
import { Role } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUserById(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async deleteUser(id: number) {
    const user = await this.getUserById(id);

    if (!user) throw new NotFoundException('User does not exist');

    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async createUser(createUserDto: CreateUserDto) {
    const userInDb = await this.prisma.user.findUnique({
      where: { fullName: createUserDto.fullName },
    });
    if (userInDb)
      throw new BadRequestException(
        'fullName already exists. It should be unique',
      );
    return await this.prisma.user.create({ data: { ...createUserDto } });
  }

  async getUsers(queryUserDto?: QueryUserDto) {
    return await this.prisma.user.findMany({ where: { ...queryUserDto } });
  }

  async editUser(id: number, dto: EditUserDto) {
    const userInDb = await this.getUserById(id);

    if (!userInDb) throw new NotFoundException('User does not exist');

    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });
    return user;
  }
}
