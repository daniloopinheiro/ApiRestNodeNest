import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { HelloUnic, HelloUnicValidator } from "src/Validators/hello.validator";

export class UpdateHelloDTO {
    
    id: string

    @IsNotEmpty({message: 'a mensagem não pode ser vazia!'})
    @HelloUnic({ message: 'Já existe uma mensagem com este texto!'})
    @IsOptional()
    messages: string;
}