import { IsOptional, IsEnum } from 'class-validator';
import { Role } from '@prisma/client';

export class QueryUserDto {
  @IsOptional()
  @IsEnum(Role)
  role: Role;
}
