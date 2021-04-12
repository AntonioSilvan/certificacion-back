import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Users } from '../users.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>
    ) {}

    async findAll() {
        return await this.usersRepository.find();
    }

    findOne(id: number) {
        return this.usersRepository.findOne(id);
    }

    async create(createUserDto){
        const user = this.usersRepository.create(createUserDto);
        return await this.usersRepository.save(user);
    }
}
