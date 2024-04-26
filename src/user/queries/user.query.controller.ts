import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.qurey.service';
import { User } from '../schemas/user.schema';

@Controller({ path: '/query/user', })

export class UserController {
    constructor(
        private readonly service: UserService,
    ) { }

    // @Post()
    // async create(@Body() body: CreateUserDto) {
    //     const data = await this.service.create(body);
    //     return data;
    // }


    @Get()
    async getAllUser(): Promise<User[]> {
        return this.service.getAll();
    }
    // @Delete(':id')
    // async deleteUser(
    //     @Param('id')
    //     id: string,
    // ): Promise<User> {
    //     return this.commandBus.execute(new DeleteUserCommand(id));
    //     // return this.userService.deleteUser(id)
    // }
    // @Get()
    // async getAllUsers() {
    //   return this.queryBus.execute(new getListUserQuery());
    // }


    // @Get(':id')
    // async findOne(
    //     @Param('id')
    //     id: string): Promise<User> {
    //     return this.userService.findOne(id);
    // }

    // @Put(':id')
    // async updateUser(
    //     @Param('id')
    //     id: string,
    //     @Body()
    //     user: UpdateUserDto
    // ): Promise<User> {
    //     return this.userService.updateUser(id, user)
    // }
    // @Delete(':id')
    // async deleteUser(
    //     @Param('id')
    //     id: string,
    // ): Promise<User> {
    //     return this.userService.deleteUser(id)
    // }
}
