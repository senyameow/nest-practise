import { Injectable } from '@nestjs/common';
import { createUserType } from 'src/utils/types';

// Injectable basically means that we can inject this service anywhere in our app
// services ressponsible for business logic, basically everything that my app needs to do
@Injectable()
export class UsersService {
    private users = [
        { username: 'senyameow', email: 'qe' }
    ]


    fetchUsers() {
        return this.users
    }

    createUser(userData: createUserType) {
        this.users.push(userData)
        return this.users
    }
}
