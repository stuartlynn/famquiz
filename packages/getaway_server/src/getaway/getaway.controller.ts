import {
    Controller,
    Get,
    Post,
    Body,
} from '@nestjs/common';

import { GetAwayService } from './getaway.service';
  
  @Controller('getaway')
  export class GetAwayController {
    constructor(private readonly getAwayService: GetAwayService) {}
  
    @Get()
    get() {
      return this.getAwayService.getState();
    }
  
    @Post('answer')
    answer(@Body('name') name:string, @Body('bet') bet:number, @Body('correct') correct:boolean, @Body('answer') answer:string) {
        console.log('name ', name, ' answer ', answer, ' correct ',correct, ' bet ', bet)
        this.getAwayService.playerAnswered(name,bet,correct, answer);
    }

    @Get('restart')
    reset(){
        this.getAwayService.restart()
    }
  
    @Post('join')
    join(@Body('name') name:string) {
      console.log("JOINED  ", name)
      const sessions =  this.getAwayService.playerJoined(name) ;
    }

    @Post('left')
    left(@Body('name') name:string) {
      console.log("left  ", name)
      const sessions = this.getAwayService.playerLeft(name) ;
    }
  }
  