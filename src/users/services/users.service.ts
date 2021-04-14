import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Users } from '../users.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>
    ) {}

    async findAll() {
        try{
            const users = await this.usersRepository.find();

            if(!users){
                throw new NotFoundException();
            }

            return {
                status: true,
                message: 'Users',
                data: users
            }
        }catch(error){
            return { status: false, message: error.message }
        }
    }

    async findOne(id: number) {
        try{
            const user = await this.usersRepository.findOne(id);
            
            if(!user){
                throw new NotFoundException()
            }

            return {
                status: true,
                message: 'User',
                data: user
            }
        }catch(error){
            return { status: false, message: error.message }
        }
    }

    async create(createUserDto){
        try{
            const user = this.usersRepository.create(createUserDto);
            const execute = await this.usersRepository.save(user);

            return {
                status: true,
                message: 'User saved',
                data: execute
            }
        }catch(error){
            return { status: false, message: error.message }
        }
    }

    async update(id, updateUserDto){
        try{
            const user = await this.usersRepository.findOne(id);
            const editedUser = Object.assign(user, updateUserDto);
            const execute = await this.usersRepository.save(editedUser);

            return {
                status: true,
                message: 'User edited successfully',
                data: execute
            }
        }catch(error){
            return { status: false, message: error.message }
        }
    }

    async delete(id){
        try{
            const user = await this.usersRepository.findOne(id);
            const userRemoved = await this.usersRepository.remove(user);

            return {
                status: true,
                message: 'User removed successfully',
                data: userRemoved
            }
        }catch(error){
            return { status: false, message: error.message }
        }
    }
}
