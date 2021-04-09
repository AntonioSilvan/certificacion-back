import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import config  from './ormconfig';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    ...config,
    keepConnectionAlive: true
  }), 
  UsersModule],
})
export class AppModule {}
