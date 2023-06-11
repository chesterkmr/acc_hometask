import { Controller, Get } from '@nestjs/common';

@Controller()
export class HelloWorldController {
  @Get('/hello')
  sayHello(): string {
    return 'Hello world';
  }
}
