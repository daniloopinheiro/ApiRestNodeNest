import { Module } from "@nestjs/common";
import { AppController } from "src/controllers/app.controller";
import { AppRepository } from "src/repositories/app.repository";
import { HelloServer } from "src/servers/hello.server";
import { AppService } from "src/services/app.service";
import { HelloUnicValidator } from "src/Validators/hello.validator";

@Module({
    controllers: [AppController],
    providers: [AppService, AppRepository, HelloUnicValidator],
  })

  export class HelloModule {} 