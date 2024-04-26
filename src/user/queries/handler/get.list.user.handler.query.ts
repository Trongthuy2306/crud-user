import { EventPublisher, IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UserAggregateModel } from "../models/aggregate.model.query";
import { GetListUserQuery } from "../getlist.user.query";
import { UserQueryRepository } from "../repositorys/user.query.repository";

@QueryHandler(GetListUserQuery)
export class GetListUserHandler implements IQueryHandler<GetListUserQuery> {
    constructor(
        private publisher: EventPublisher,
        private readonly repo: UserQueryRepository,
    ) { }

    async execute(query: GetListUserQuery): Promise<any> {
        const { } = query;
        return await this.repo.findAll();

        // const aggregateModel = new UserAggregateModel(event);
        // const publisher = this.publisher.mergeObjectContext(aggregateModel);
        // publisher.createItem();
        // publisher.commit();
    }
}