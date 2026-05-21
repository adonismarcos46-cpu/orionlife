import { Module } from '@nestjs/common';
import { OrisController } from './oris.controller';
import { OrisService } from './oris.service';

@Module({
  controllers: [OrisController],
  providers: [OrisService],
  exports: [OrisService],
})
export class OrisModule {}
