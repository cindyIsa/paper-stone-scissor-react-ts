import { Fragment } from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { CheckCircleFilled, CloseCircleFilled, MinusCircleFilled } from '@ant-design/icons'
import { game, gameResult } from '../../models/game'

import './style.scss'
import { GuessGame } from '../../gameFn/guessGame';
interface props extends ParamFromProps {

}
const GameHistory = (prop: props) => {
    const { state } = prop;
    return (
    <Fragment>
        <div className="resultInfo">
            <div className="win" style={{background:"green" , color:"snow"}}>W:{ GuessGame.winRate(state) }</div>
            <div className="draw" style={{background:"black", color:"snow" }}>D:{ GuessGame.drawRate(state) }</div>
            <div className="lose" style={{background:"red", color:"snow"}}>L:{ GuessGame.loseRate(state) }</div>
        </div>
        {state?.map(g => {
            return (
                <div className='gameItem'>
                    <div className="user">
                        <img width={20} alt=""
                            src={require('../../' + GuessGame.getImageLink(g.userSelection))} />
                        {g.userSelection}</div>
                    <div className="random">
                        <img width={20} alt=""
                            src={require('../../' + GuessGame.getImageLink(g.randomSelection))} />
                        {g.userSelection}</div>
                    <div className="result">
                        {
                            g.result === gameResult.win ?
                                <CheckCircleFilled style={{ width: 20, color: 'green' }} /> :
                                g.result === gameResult.lose ?
                                    <CloseCircleFilled style={{ width: 20, color: 'red' }} /> :
                                    <MinusCircleFilled style={{ width: 20 }} />
                        }

                        {g.result}</div>
                </div>
            )
        })
        }
    </Fragment>)}

const connector = connect(
    (state: game[]) => ({ state })
)
type ParamFromProps = ConnectedProps<typeof connector>
export default connector(GameHistory)