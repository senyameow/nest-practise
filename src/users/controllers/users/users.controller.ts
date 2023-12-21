import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response, response } from 'express';
import { CreateUserDto } from 'src/users/dtos/createUserDto.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return { username: 'senyameow', age: 18 }
    }

    @Get('posts')
    getUsersPosts() {
        return [
            { title: 'backend is cool!', description: 'i kind of like nest =)' },
            { title: 'backend is BAAAD, I LIKE FRONT!', description: 'i kind of like nest =)' },
            {},
        ]
    }

    @Get('posts/comments')
    getUsersPostsComments() {
        return [
            {
                id: 1, comments: [
                    { userId: 0, msg: 'hello' }
                ]
            }
        ]
    }

    @Post()
    createUser(@Req() request: Request, @Res() response: Response) { // it's express' interface!
        console.log(request.body)
        response.send('user has been created')
    }

    @Post('create')
    createUserSecond(@Body() userData: CreateUserDto) {
        console.log(userData)
        return {}
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return { id }
    }
} 
