import { Module } from '@nestjs/common';
import { VoucherController } from './voucher.controller';

@Module({
  controllers: [VoucherController]
})
export class VoucherModule {}
