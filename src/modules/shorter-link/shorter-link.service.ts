import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { Link } from './link.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ShorterLinkService {
  constructor(
    @InjectModel(Link.name)
    private linkModel: Model<Link>,
  ) {}

  async getLink(shortUrl) {
    const link = await this.linkModel.findOne({ shortUrl });

    if (!link) {
      return '/notfound';
    }

    return link.originalUrl;
  }
}
