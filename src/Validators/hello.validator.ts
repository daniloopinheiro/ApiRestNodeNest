// import { ValidationPipe } from "@nestjs/common";
// import { NestFactory } from "@nestjs/core";
// import { AppModule } from "src/modules/app.module";

import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidateByOptions, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { AppRepository } from "src/repositories/app.repository";

// export async function HelloValidator() {
//     const app = await NestFactory.create(AppModule);
//     app.useGlobalPipes(
//     new ValidationPipe(
//         {
//             transform: true,
//             whitelist: true,
//             forbidNonWhitelisted: true,
//         })
//     );
// }

@Injectable()
@ValidatorConstraint({ async: true })
export class HelloUnicValidator implements ValidatorConstraintInterface{
    constructor(private appRepository: AppRepository){}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const buscaHello = await this.appRepository.existHello(value);
        return !buscaHello;
    }
}

export const HelloUnic = (opValidator: ValidationOptions) => {
    return (object: Object, properties: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: properties,
            options: opValidator,
            constraints: [],
            validator: HelloUnicValidator
        });
    }
}