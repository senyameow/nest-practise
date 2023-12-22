import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response, response } from 'express';
import { CreateUserDto } from 'src/users/dtos/createUserDto.dto';

@Controller('users')
export class UsersController {

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

    @Get(':id/:postId')
    getUserById(@Param('id') id: string, @Param('postId') postId) {
        return { id, postId }
    }

    // query params!

    // query params are essential for filtering

    // for example i can filter users based on letters etc etc

    @Get()
    getSortedUsers(@Query('sortBy') sortBy: string) {
        console.log(sortBy)
        return [
            { username: 'senyameow', age: 18 }, { username: 'qweqwe', age: 54 }
        ]
    }
} 
