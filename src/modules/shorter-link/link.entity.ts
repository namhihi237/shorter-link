import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Link {
  @Prop()
  originalUrl: string;

  @Prop()
  shortUrl: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
