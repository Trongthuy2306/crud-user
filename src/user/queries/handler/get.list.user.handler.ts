import { EventPublisher, IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UserRepository } from "../repositorys/user.repository";
import { UserAggregateModel } from "../models/aggregate.model";
import { GetListUserQuery } from "../getlist.user.query";

@QueryHandler(GetListUserQuery)
export class GetListUserHandler implements IQueryHandler<GetListUserQuery> {
    constructor(
        private publisher: EventPublisher,
        private readonly repo: UserRepository,
    ) { }

    async execute(query: GetListUserQuery): Promise<any> {
        const { } = query;
        const event = await this.repo.findAll();

        // const aggregateModel = new UserAggregateModel(event);
        // const publisher = this.publisher.mergeObjectContext(aggregateModel);
        // publisher.createItem();
        // publisher.commit();
    }
}