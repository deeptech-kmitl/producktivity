import {Controller, Get, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {OAuthGuard} from "../guards";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get("/auth")
  @UseGuards(OAuthGuard)
  getGreeting(): string {
    return "Hello auth";
  }
}
