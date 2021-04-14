import { IsEmail, IsOptional, IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    name: string

    @IsString()
    lastName: string

    @IsEmail()
    email: string

    @IsString()
    password: string
}

export class UpdateUserDto{
    @IsString()
    @IsOptional()
    name: string

    @IsString()
    @IsOptional()
    lastName: string

    @IsEmail()
    @IsOptional()
    email: string

    @IsString()
    @IsOptional()
    password: string
}