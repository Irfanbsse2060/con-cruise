import {
  IsNumber,
  IsOptional,
  IsString
} from "class-validator";
import { Role } from '@prisma/client';
export class EditUserDto {
  @IsOptional()
  role: Role;

  @IsString()
  @IsOptional()
  fullName: string;

  @IsNumber()
  @IsOptional()
  lat: number;

  @IsNumber()
  @IsOptional()
  long: number;

  @IsNumber()
  @IsOptional()
  numberOfRides: number;

  @IsNumber()
  @IsOptional()
  averageRating: number;
}
