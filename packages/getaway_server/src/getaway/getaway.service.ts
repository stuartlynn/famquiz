import { Injectable, NotFoundException } from '@nestjs/common';
import {GetAway} from './getaway.model'

@Injectable()
export class GetAwayService {
    getaway: GetAway;

  constructor() {
      this.getaway = new GetAway();
  }
  
  restart(){
    this.getaway = new GetAway()
  }

  playerAnswered(name:string, bet:number, correct:boolean, answer:string){
      this.getaway.playerAnsweredQuestion(name,bet,correct, answer)
  }

  start(){
      this.getaway.start()
  }

  playerJoined(name:string){
      this.getaway.playerJoined(name)
  }

  playerLeft(name:string){
    this.getaway.playerLeft(name)
}

  getState(){
        return this.getaway
  }
}
