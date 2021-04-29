import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import config  from './ormconfig';
import { UsersModule } from './users/users.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    ...config,
    keepConnectionAlive: true
  }), 
  UsersModule, QuestionsModule],
})
export class AppModule {}
