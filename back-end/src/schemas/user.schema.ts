import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { IsEmail } from 'class-validator';

@Schema()
export class User {
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  @IsEmail()
  email: string;

  @Prop({ required: true })
  @Exclude()
  password: string;

  @Prop({ nullable: true })
  token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.set('toJSON', {
  transform: (_, entity) => {
    entity.id = entity._id;
    delete entity._id;

    delete entity.password;
    delete entity.token;
  },
});
