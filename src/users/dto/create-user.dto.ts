import {
  IsEnum,
  isEnum,
  IsNumber,
  IsString
} from "class-validator";
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsEnum(Role)
  role: Role;

  @IsString()
  fullName: string;

  @IsNumber()
  lat: number;

  @IsNumber()
  long: number;

  @IsNumber()
  numberOfRides: number;

  @IsNumber()
  averageRating: number;
}