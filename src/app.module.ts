import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShorterLinkModule } from './modules/shorter-link/shorter-link.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule, ShorterLinkModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
