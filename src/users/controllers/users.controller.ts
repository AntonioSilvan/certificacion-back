import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateUserDto, EditPostDto } from '../dtos/create-user.dto';
import { UsersService } from '../services/users.service';

@Controller('api/users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getAll(){
        return await this.usersService.findAll();
    }

    @Get('/:id')
    async getOne(@Param('id') id: number){
        return this.usersService.findOne(id);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto){
        return await this.usersService.create(createUserDto);
    }
}
