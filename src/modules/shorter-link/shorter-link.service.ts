import { Inject, Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { Link } from './link.entity';
import { InjectModel } from '@nestjs/mongoose';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class ShorterLinkService {
  constructor(
    @InjectModel(Link.name)
    private linkModel: Model<Link>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getLink(shortUrl) {
    const cachedValue = await this.cacheManager.get(shortUrl);

    if (cachedValue) {
      return cachedValue;
    }
    const link = await this.linkModel.findOne({ shortUrl });

    if (!link) {
      return '/notfound';
    }

    await this.cacheManager.set(shortUrl, link.originalUrl, 0); // set ttl 0, because default 5s

    return link.originalUrl;
  }
}
