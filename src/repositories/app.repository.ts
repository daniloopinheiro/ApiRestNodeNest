import { Injectable } from "@nestjs/common";
import { HelloEntity } from "src/entities/hello.entity";

@Injectable()
export class AppRepository{
    private hellos: HelloEntity[] = [];

    async salvar(hello: HelloEntity){
        this.hellos.push(hello);
    }

    async listHello(){
        return this.hellos;
    }

    async existHello(messages: string)
    {
        const buscaHello = this.hellos.find(
            hello => hello.message === messages
        );

        return buscaHello !== undefined;
    }

    private searchHelloId(id: string){
        const existhellos = this.hellos.find(
            hellosalve => hellosalve.id === id
        );

        if(!existhellos){
            throw new Error('Hello não existe');
        }

        return existhellos;
    }

    async update(id: string, message: Partial<HelloEntity>){
        const existHellos = this.searchHelloId(id); 

        Object.entries(message).forEach(([key, value]) => {
            if(key === 'id'){
                return;
            }
            existHellos[key] = value;
        });

        return existHellos;
    }

    async removeHello(id: string){
        const hello = this.searchHelloId(id);
        this.hellos = this.hellos.filter(
            helloSalve => helloSalve.id !== id
        );

        return hello;
    }
}
