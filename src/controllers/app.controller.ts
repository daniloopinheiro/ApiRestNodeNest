import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { AppRepository } from '../repositories/app.repository'
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private dataAppRepository = new AppRepository();

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/hello')
  async postHello(@Body() dataApp){
    this.dataAppRepository.salvar(dataApp);
    return dataApp;
  }

  @Get('/list-hello')
  async listHello(){
    return this.dataAppRepository.listHello();
  }
}
