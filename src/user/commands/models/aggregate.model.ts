import { AggregateRoot } from '@nestjs/cqrs';

import { UserCreatedEvent } from '../event/user.event';
import { CreateUserDto } from '../dtos/create.user.dto';

export class UserAggregateModel extends AggregateRoot {
  constructor(
    private readonly es: CreateUserDto
  ) {
    super();
  }

  createItem() {
    this.apply(new UserCreatedEvent(this.es));
  }
}
