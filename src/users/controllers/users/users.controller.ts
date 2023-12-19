import { Controller, Get } from '@nestjs/common';

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
}
