import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('api/users')
export class UsersController {

    @Get()
    getAll(){
        return { status: true }
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto){
        return createUserDto;
    }
}
