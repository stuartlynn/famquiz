import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetAwayModule } from './getaway/getaway.module';


@Module({
  imports: [
    GetAwayModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
