import {  game, gameOption, gameResult, gameSelections } from "../models/game"

export class GuessGame{
    static gameResult = (user:number, random:number) => { 
        if(user - random === -1 || user - random === 2){
            return gameResult.win
        }else if( user - random === 0 ){
            return gameResult.draw
        }else{
            return gameResult.lose
        }
     }
     static getImageLink = (select:any) => { 
        return gameSelections[gameOption[select] as unknown as gameOption]
      }
    static winRate = (state:Array<game>) => {
        return ((state.filter(
            s => s.result === gameResult.win).length / state.length) || 0).toFixed(2)
    }
    static loseRate = (state:Array<game>) => {
        return ((state.filter(
            s => s.result === gameResult.lose).length / state.length) || 0).toFixed(2)
    }
    static drawRate = (state:Array<game>) => {
        return ((state.filter(
            s => s.result === gameResult.draw).length / state.length) || 0).toFixed(2)
    }
}