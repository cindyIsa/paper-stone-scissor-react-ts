import { game } from '../../models/game'

export const gameActionsType = {
    addNewGameHistory : "ADD_NEW_GAME_HISTORY"
}

export const addNewGameHistory = (game:game) => ({
    type:gameActionsType.addNewGameHistory,
    payload:game,
})