import { GetListUserDto } from "../dtos/get.list.user.dto";

export class UserCreatedEvent {
    constructor(
        public readonly getListUserId: GetListUserDto
    ) { }
}
