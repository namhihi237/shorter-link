import { Module } from '@nestjs/common';
import { ShorterLinkService } from './shorter-link.service';
import { ShorterLinkController } from './shorter-link.controller';
import { Link, LinkSchema } from './link.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [ShorterLinkService],
  controllers: [ShorterLinkController],
  imports: [
    MongooseModule.forFeature([{ name: Link.name, schema: LinkSchema }]),
  ],
})
export class ShorterLinkModule {}
