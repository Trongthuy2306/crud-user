import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({ timestamps: true })

export class User {
    @Prop({ unique: true })
    email: string;

    @Prop()
    first_name: string;

    @Prop()
    last_name: string;
}
export const UserSchema = SchemaFactory.createForClass(User)