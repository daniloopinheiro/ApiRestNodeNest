import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { AppRepository } from '../repositories/app.repository';
import { HelloDTO } from 'src/dto/hello.dto';
import { HelloEntity } from 'src/entities/hello.entity';
import { listaHelloDTO } from 'src/dto/listaHello.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateHelloDTO } from 'src/dto/updateHello.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly appRepos: AppRepository) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/hello')
  async postHello(@Body() dataHello: HelloDTO){
    const helloEntity = new HelloEntity();
    helloEntity.message = dataHello.messages;
    helloEntity.id = uuidv4();
    
    this.appRepos.salvar(helloEntity);
    
    return {
      context: new listaHelloDTO(helloEntity.id, helloEntity.message),
      message: 'mensagem criada com sucesso!'
    }
  }

  @Get('/listHello')
  async listHello(){
    const helloSalve = await this.appRepos.listHello();
    const helloLista = helloSalve.map(
      hello => new listaHelloDTO(
        hello.id,
        hello.message
      ) 
    );
    return helloLista;
  }

  @Put('/hello/:id')
  async updateHello(@Param('id') id: string, @Body() message: UpdateHelloDTO){
    const updateHello = await this.appRepos.update(id, message);

    return{
      hello: updateHello,
      message: 'Hello atualizado com sucesso!',
    }
  }

  @Delete('/hello/:id')
  async deleteHello(@Param('id') id: string){
    const helloRemove = await this.appRepos.removeHello(id);

    return{
      hello: helloRemove,
      message: 'Hello removido com sucesso',
    }
  }
}