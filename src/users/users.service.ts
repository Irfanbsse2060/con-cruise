import {  NotFoundException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EditUserDto, CreateUserDto } from "./dto";


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {
  }

  async getUserById(id:number)
  {
    return await this.prisma.user.findUnique({
      where: {
        id
      },
    });
  }

  async deleteUser(id: number) {
    const user = await this.getUserById(id)

    // check if user owns the bookmark
    if (!user)
      throw new NotFoundException(
        'User does not exist'
      );

     return  await this.prisma.user.delete({
      where: {
        id
      }
    });

  }

  async createUser(user: CreateUserDto) {
    return await this.prisma.user.create({ data: { ...user } });
  }

  async getUsers() {
    return await this.prisma.user.findMany();
  }

  async editUser(
    id: number,
    dto: EditUserDto
  ) {

    const userInDb = await this.getUserById(id)

    // check if user owns the bookmark
    if (!userInDb)
      throw new NotFoundException(
        'User does not exist'
      );

    const user = await this.prisma.user.update({
      where: {
        id
      },
      data: {
        ...dto
      }
    });
    return user;
  }
}