import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';

import { CreateUserDto, UpdateUserDto } from '../dtos/create-user.dto';
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
        return await this.usersService.findOne(id);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto){
        return await this.usersService.create(createUserDto);
    }

    @Put('/:id')
    async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto){
        return await this.usersService.update(id, updateUserDto);
    }

    @Delete('/:id')
    async delete(@Param('id') id: number){
        return await this.usersService.delete(id);
    }
}
