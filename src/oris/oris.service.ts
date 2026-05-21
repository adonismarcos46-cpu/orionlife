import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OrisService {
  constructor(private prisma: PrismaService) {}

  async getBalance(userId: string): Promise<number> {
    const wallet = await this.prisma.orisWallet.findUnique({
      where: { userId },
    });
    return wallet?.balance || 0;
  }

  async addTokens(userId: string, amount: number): Promise<number> {
    const wallet = await this.prisma.orisWallet.upsert({
      where: { userId },
      update: {
        balance: {
          increment: amount,
        },
      },
      create: {
        userId,
        balance: 1250 + amount,
      },
    });
    return wallet.balance;
  }
}
