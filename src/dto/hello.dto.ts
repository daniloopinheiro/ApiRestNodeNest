import { IsNotEmpty, IsString } from "class-validator";
import { HelloUnic, HelloUnicValidator } from "src/Validators/hello.validator";

export class HelloDTO {
    @IsNotEmpty({message: 'a mensagem não pode ser vazia!'})
    @HelloUnic({ message: 'Já existe uma mensagem com este texto!'})
    messages: string;
}