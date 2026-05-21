import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrisModule } from './oris/oris.module';
import { LegacyModule } from './legacy/legacy.module';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  imports: [OrisModule, LegacyModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
