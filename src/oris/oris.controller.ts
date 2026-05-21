import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrisService } from './oris.service';

@Controller('oris')
export class OrisController {
  constructor(private readonly orisService: OrisService) {}

  @Get('balance/:userId')
  async getBalance(@Param('userId') userId: string) {
    const balance = await this.orisService.getBalance(userId);
    return { balance };
  }

  @Post('award')
  async awardTokens(@Body() data: { userId: string; amount: number }) {
    const newBalance = await this.orisService.addTokens(data.userId, data.amount);
    return { success: true, newBalance };
  }
}
