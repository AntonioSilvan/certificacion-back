import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Users } from '../users.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users) private usersRepo: Repository<Users>
    ) {}

    findAll() {
        return this.usersRepo.find();
    }

    findOne(id: number) {
        return this.usersRepo.findOne(id);
    }

    async create(createUserDto){
        return await this.usersRepo.create(createUserDto);
    }
}
