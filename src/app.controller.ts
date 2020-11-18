import {
  Controller,
  Get,
  Post,
  Request,
  Body,
  Param,
  Header,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Verifier token passé
  @Post('api/auth/token/check')
  @Header('content-type', 'application/json')
  tokenVerify(@Body() req) {
    console.log('call api/auth/token/check - POST req => ', req);
  }

  //Verifier token passé
  @Get('api/auth/token/check')
  @Header('content-type', 'application/json')
  tokenGetVerify(@Body() req) {
    console.log('call api/auth/token/check - GET req body => ', req);
  }
}
