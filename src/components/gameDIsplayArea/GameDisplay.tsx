import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { GuessGame } from '../../gameFn/guessGame'
import './style.scss'

interface props {
  state: any
}
class GameDisplay extends Component<props> {
  userSelection: string = ""
  randomSelection: string = ""

  render() {
    const { userSelection, randomSelection } = this.props.state[0] ?? ""
    this.userSelection = GuessGame.getImageLink(userSelection)
    this.randomSelection = GuessGame.getImageLink(randomSelection)

    return (
      <>
        <div className="gameDisplay">
          {this.userSelection ?
            <img src={require("../../" + this.userSelection)} alt="" />
            :
            null
          }
        </div>
        <div className="gameDisplay randomDisplay">
          {this.randomSelection ?
            <img src={require("../../" + this.randomSelection)} alt="" />
            :
            null
          }
        </div>
      </>
    )
  }
}
export default connect(
  state => ({ state })
)(GameDisplay)
