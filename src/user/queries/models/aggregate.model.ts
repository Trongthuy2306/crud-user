import { AggregateRoot } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../event/user.event';
import { GetListUserDto } from '../dtos/get.list.user.dto';

export class UserAggregateModel extends AggregateRoot {
  constructor(
    private readonly es: GetListUserDto
  ) {
    super();
  }

  createItem() {
    this.apply(new UserCreatedEvent(this.es));
  }
}
