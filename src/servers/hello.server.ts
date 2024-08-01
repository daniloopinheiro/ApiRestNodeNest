import { NestFactory } from "@nestjs/core";
import { HelloModule } from "src/modules/hello.module";

export function HelloServer(app) {
    app = NestFactory.create(HelloModule);
    app.listen(3000);
}

// HelloServer().catch(err => console.error('Erro ao iniciar o servidor:', err));