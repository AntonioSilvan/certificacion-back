import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { Users } from './users.entity'; 

@Module({
    imports: [
        TypeOrmModule.forFeature([Users])
    ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
