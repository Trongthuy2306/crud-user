import { User } from '../schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { UtilsService } from '../utils/utils.service';
import { CreateUserDto } from './dtos/create.user.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './create.user.command';

@Injectable()
export class UserService {
    constructor(
        private readonly utils: UtilsService,
        private readonly commandBus: CommandBus,
    ) { }

    async create(command: CreateUserDto): Promise<User> {
        const commandId = this.utils.generateNanoID();
        const { email, first_name, last_name } = command;
        return await this.commandBus.execute(new CreateUserCommand(commandId, email, first_name, last_name));
    }

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
