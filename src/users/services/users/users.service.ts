import { Injectable } from '@nestjs/common';

// Injectable basically means that we can inject this service anywhere in our app
// services ressponsible for business logic, basically everything that my app needs to do
@Injectable()
export class UsersService {
    private users = [
        { username: 'senyameow', age: 123 }, { username: 'qweqwe', age: 183 }, { username: 'senyameow', age: 54 }, { username: 'qweqwe', age: 18 }
    ]
    fetchUsers() {
        return this.users
    }
}
