import { ICommand } from "@nestjs/cqrs";

export class CreateUserCommand implements ICommand {
    constructor(
        public readonly id: string,
        public readonly email: string,
        public readonly first_name: string,
        public readonly last_name: string,
    ) { }
}

export class UpdateUserCommand implements ICommand {
    constructor(
        public readonly id: string,
        public readonly email?: string,
        public readonly first_name?: string,
        public readonly last_name?: string,
    ) { }
}
export class DeleteUserCommand implements ICommand {
    constructor(
        public readonly id: string,
        public readonly email?: string,
        public readonly first_name?: string,
        public readonly last_name?: string,
    ) { }
}

