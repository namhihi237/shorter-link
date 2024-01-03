import { Controller, Get, Param, Res } from '@nestjs/common';
import { ShorterLinkService } from './shorter-link.service';

@Controller('shorter-link')
export class ShorterLinkController {
  constructor(private sorterLinkService: ShorterLinkService) {}

  @Get('/:sorterLink')
  async getLink(@Param('sorterLink') sorterLink, @Res() res) {
    return res
      .status(301)
      .redirect(await this.sorterLinkService.getLink(sorterLink));
  }
}
