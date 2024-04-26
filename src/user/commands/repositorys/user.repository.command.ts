import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../../schemas/user.schema';

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel('DB1') private readonly userModel: mongoose.Model<User>,
        // @InjectModel('DB2') private readonly userModel2: mongoose.Model<User>,
    ) { }
    async createUser(email: string, first_name: string, last_name: string): Promise<any> {
        return this.userModel.create({ email, first_name, last_name })
    }
    // async findAll(): Promise<User[]> {
    //     return this.userModel.find();
    // }

    // async findById(id: string): Promise<User> {
    //     return this.userModel.findById(id).exec();
    // }

    // async update(id: string, data: Partial<User>): Promise<User> {
    //     return this.userModel.findByIdAndUpdate(id, data, { new: true }).exec();
    // }

    // async delete(id: string): Promise<User> {
    //     return this.userModel.findByIdAndDelete(id).exec();
    // }

}