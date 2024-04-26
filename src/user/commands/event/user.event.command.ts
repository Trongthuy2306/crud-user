import { CreateUserDto } from "../dtos/create.user.dto.command";

export class UserCreatedEvent {
    constructor(
        public readonly userCreatedId: CreateUserDto
    ) { }
}
