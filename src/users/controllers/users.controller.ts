import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDto, EditPostDto } from '../dtos/create-user.dto';
import { UsersService } from '../services/users.service';

@Controller('api/users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAll(){
        return { status: true }
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto){
        return this.usersService.create(createUserDto);
    }
}
