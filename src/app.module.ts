import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import config  from './ormconfig';
import { UsersModule } from './users/users.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import { VoucherModule } from './voucher/voucher.module';
import { ExamsModule } from './exams/exams.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    ...config,
    keepConnectionAlive: true
  }), 
  UsersModule, QuestionsModule, AnswersModule, VoucherModule, ExamsModule],
})
export class AppModule {}
