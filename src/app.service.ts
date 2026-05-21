import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Orionis Core API v1.0 - Digital Legacy & Emotional AI';
  }
}
