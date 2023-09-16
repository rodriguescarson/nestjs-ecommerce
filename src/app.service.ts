import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to ecommerce backend using nestjs developed by Carson Rodrigues!';
  }
}
