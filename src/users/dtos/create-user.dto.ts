import { IsEmail, IsOptional, IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    name: string

    @IsString()
    lastName: string

    @IsEmail()
    @IsOptional()
    email: string

    @IsString()
    password: string
}