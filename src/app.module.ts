import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HeroController } from './hero/hero.controller';
import { AppService } from './app.service';
import { SkinController } from './skin/skin.controller';

@Module({
  imports: [],
  controllers: [AppController, HeroController, SkinController],
  providers: [AppService],
})
export class AppModule {}
