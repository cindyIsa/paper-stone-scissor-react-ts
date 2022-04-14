import { connect, ConnectedProps } from 'react-redux'
import { GuessGame } from '../../gameFn/guessGame'
import { gameOption, gameSelections } from '../../models/game'
import { addNewGameHistory } from '../../redux/actions/game'
import "./style.scss"

interface Props extends ParamFromProps{}

const GameSelection = (props:Props) => {

    const addNewGame = (key: string) => {
        return () => {
            const userSelect = Number(key)
            const randomGame = Math.floor(Math.random() * 3)
            const gameRes = GuessGame.gameResult(userSelect, randomGame)
            const newHistory = {
                userSelection: gameOption[userSelect],
                randomSelection: gameOption[randomGame],
                result: gameRes
            }
            setTimeout(() => {
                props.addNewGameHistory(newHistory)
            }, 500);
        }
    }

    return (
        < >
            {Object.entries(gameSelections).map(([key, val]) => {
                return (
                    <div className='selection' onClick={addNewGame(key)} >
                        <img src={require("../../" + val)} alt={key} />
                    </div>
                )
            })}
        </>
    )

}

const connector = connect(
    state => ({ state }),
    {
        addNewGameHistory: addNewGameHistory
    })
type ParamFromProps = ConnectedProps<typeof connector>
export default connector(GameSelection)