import { User } from '../schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { UserQueryRepository } from './repositorys/user.query.repository';

@Injectable()
export class UserService {
    constructor(
        private readonly userQueryRepo: UserQueryRepository
    ) { }

    async getAll(): Promise<User[]> {
        // const commandId = this.utils.generateNanoID();

        return await this.userQueryRepo.findAll();
    }
    // async getAllUsers() {
    //     return this.queryBus.execute(new GetListUserQuery());
    // }

    // async getListUser(): Promise<User[]> {
    //     const entityId = this.utils.generateUUID();
    //     const users = await this.userModel.find().exec()
    //     return users;
    // }

    // async createUser(user: User): Promise<User> {
    //     const res = await this.userModel.create(user)
    //     return res;
    // }




    // findOne(id: string): Promise<User> {
    //     const user = this.userModel.findById(id)
    //     if (!user) {
    //         throw new NotFoundException('Khong tim thay User nay!');
    //     }
    //     return user;

    // }

    // async updateUser(id: string, user: User): Promise<User> {
    //     return await this.userModel.findByIdAndUpdate(
    //         id, user,
    //         {
    //             new: true,
    //             runValidators: true
    //         }
    //     )
    // }

    // async deleteUser(id: string): Promise<User> {
    //     return await this.userModel.findByIdAndDelete(id)
    // }
}
