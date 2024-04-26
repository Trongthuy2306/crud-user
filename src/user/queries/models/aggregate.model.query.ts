import { AggregateRoot } from '@nestjs/cqrs';
import { GetListUserDto } from '../dtos/get.list.user.dto.query';
import { UserGetListEvent } from '../event/user.event.query';

export class UserAggregateModel extends AggregateRoot {
  constructor(
    private readonly es: GetListUserDto
  ) {
    super();
  }

  createItem() {
    this.apply(new UserGetListEvent(this.es));
  }
}
