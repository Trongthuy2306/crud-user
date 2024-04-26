import { IQuery } from "@nestjs/cqrs";

export class GetListUserQuery implements IQuery { }

export class GetUserByIdQuery implements IQuery {
    constructor(public readonly id: string) { }
}