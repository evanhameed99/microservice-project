import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from 'libs/common';

@Schema({ versionKey: false })
export class User extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phoneNumber: string;
}

export const userSchema = SchemaFactory.createForClass(User);
