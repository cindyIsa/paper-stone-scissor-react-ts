import { game } from "../../models/game"
import { gameActionsType } from "../actions/game";

const initialState:Array<game> = []

export const gameReduce = (preState = initialState,action:any) =>{
    switch (action.type) {
        case gameActionsType.addNewGameHistory:
            return [action.payload, ...preState]
        default:
            return initialState;
    }
}