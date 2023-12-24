import { Injectable } from '@nestjs/common';
import { createUserType } from 'src/utils/types';

// Injectable basically means that we can inject this service anywhere in our app
// services ressponsible for business logic, basically everything that my app needs to do
@Injectable()
export class UsersService {
    private users = [
        { username: 'senyameow', email: 'qe', id: 10 }
    ]


    fetchUsers() {
        return this.users
    }

    fetchUserById(id: number) {
        return this.users.filter(user => user.id === id)
    }

    createUser(userData: createUserType) {
        this.users.push({ ...userData, id: 14 })
        return this.users
    }
}
