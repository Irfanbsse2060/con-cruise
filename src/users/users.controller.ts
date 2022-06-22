import {
  Body,
  Controller, Delete,
  Get,
  Param, ParseIntPipe,
  Patch,
  Post
} from "@nestjs/common";
import { CreateUserDto, EditUserDto } from "./dto";
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers()
  }

  @Delete(':id' )
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id)
  }

  @Post()
  createUser(
    @Body() createUserDto: CreateUserDto,
  ) {
    return this.userService.createUser(createUserDto)
  }

  @Patch(':id')
  editUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() editUserDto: EditUserDto,
  ) {
    return this.userService.editUser(id, editUserDto);
  }
}
