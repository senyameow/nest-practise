import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    username: string;
    age: number

    @IsEmail()
    email: string
}