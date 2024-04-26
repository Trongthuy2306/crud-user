import { GetListUserDto } from "../dtos/get.list.user.dto.query";

export class UserGetListEvent {
    constructor(
        public readonly getListUserId: GetListUserDto
    ) { }
}
