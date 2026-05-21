import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LegacyService } from './legacy.service';

@Controller('legacy')
export class LegacyController {
  constructor(private readonly legacyService: LegacyService) {}

  @Post('memory')
  async saveMemory(@Body() data: { userId: string; content: string; isFuture?: boolean }) {
    return this.legacyService.saveMemory(data.userId, data.content, data.isFuture);
  }

  @Get('memories/:userId')
  async getMemories(@Param('userId') userId: string) {
    return this.legacyService.getMemories(userId);
  }
}
