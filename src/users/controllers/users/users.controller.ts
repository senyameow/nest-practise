import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseArrayPipe, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response, response } from 'express';
import { CreateUserDto } from 'src/users/dtos/createUserDto.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { createUserType } from 'src/utils/types';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {

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



    // @Get(':id/:postId')
    // getUserById(@Param('id', ParseIntPipe) id: number, @Param('postId') postId) {
    //     return { id, postId }
    // }

    // query params!

    // query params are essential for filtering

    // for example i can filter users based on letters etc etc

    @Get()
    getSortedUsers(@Query('sortAsc', ParseBoolPipe) sortAsc: boolean) {
        console.log(sortAsc)
        return sortAsc ? [
            { username: 'senyameow', age: 54 }, { username: 'qweqwe', age: 18 }
        ].sort((a, b) => a.age - b.age) : [
            { username: 'senyameow', age: 54 }, { username: 'qweqwe', age: 18 }
        ]
    }

    // and later i can sort array with sortBy (lodash)

    // VALIDATION 
    // for now we did not validate our post request
    // we are able now to send JSON without age or username or don't send anything at all
    // that's bad.. what if we want our user to sign up. He can do it only if he fills all info about himself

    // for this purposes we need class validator and class transformer


    // we can also validate query and row params

    @Get('all')
    getAllUsers() {
        return this.userService.fetchUsers()
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUserSecond(@Body() userData: createUserType) {
        // better practice would be to create custom type for handling creation of user
        // since not always all from Dto type we wanna use while creating user
        console.log(userData)
        return this.userService.createUser(userData)
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.fetchUserById(id)
        if (!user) throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST)
        else return user
    }

} 
