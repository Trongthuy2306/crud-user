import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserCommand, DeleteUserCommand } from "../create.user.command";
import { UserRepository } from "../repositorys/user.repository.command";
import { UtilsService } from "../../utils/utils.service";
import { UserAggregateModel } from "../models/aggregate.model.command";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    constructor(
        private publisher: EventPublisher,
        private readonly Repo: UserRepository,
    ) { }

    async execute(command: CreateUserCommand): Promise<any> {
        const { email, first_name, last_name } = command;
        const event = await this.Repo.createUser(email, first_name, last_name);
        const aggregateModel = new UserAggregateModel(event);
        const publisher = this.publisher.mergeObjectContext(aggregateModel);
        publisher.createItem();
        publisher.commit();
    }
}