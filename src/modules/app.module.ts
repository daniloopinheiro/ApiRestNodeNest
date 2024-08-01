import { Module } from '@nestjs/common';
import { HelloModule } from "src/modules/hello.module";
import { HelloServer } from 'src/servers/hello.server';

@Module({
  imports: [HelloModule]
})
export class AppModule {}
