import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class LegacyService {
  constructor(private prisma: PrismaService) {}

  async saveMemory(userId: string, content: string, isFuture: boolean = false) {
    return this.prisma.memory.create({
      data: {
        userId,
        content,
        isFuture,
      },
    });
  }

  async getMemories(userId: string) {
    return this.prisma.memory.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
