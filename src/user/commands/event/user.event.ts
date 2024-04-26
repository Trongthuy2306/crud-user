import { CreateUserDto } from "../dtos/create.user.dto";

export class UserCreatedEvent {
    constructor(
        public readonly userCreatedId: CreateUserDto
    ) { }
}
