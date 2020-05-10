import { Module } from '@nestjs/common';

import { GetAwayController } from './getaway.controller';
import { GetAwayService } from './getaway.service';

@Module({
  controllers: [GetAwayController],
  providers: [GetAwayService],
})
export class GetAwayModule {}
