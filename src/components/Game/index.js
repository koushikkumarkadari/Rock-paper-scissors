import {Component} from 'react'
import Scorecard from '../Scorecard'
import GameView from '../GameView'
import ResultView from '../ResultView'
import RulesCard from '../RulesCard'
import {DivContainer} from './styledComponents'

class Game extends Component {
  state = {
    score: 0,
    isGameOver: false,
    result: '',
    yourSelection: '',
    opponentSelection: '',
  }

  onPlayAgain = () => {
    this.setState({
      isGameOver: false,
      yourSelection: '',
      opponentSelection: '',
      result: '',
    })
  }

  onSelect = yourSelection => {
    const {choicesList} = this.props
    const random = Math.floor(Math.random() * 3)
    const opponentSelection = choicesList[random].id
    if (yourSelection === opponentSelection) {
      this.setState({result: 'IT IS DRAW'})
    } else if (
      (yourSelection === 'ROCK' && opponentSelection === 'SCISSORS') ||
      (yourSelection === 'SCISSORS' && opponentSelection === 'PAPER') ||
      (yourSelection === 'PAPER' && opponentSelection === 'ROCK')
    ) {
      this.setState(prevState => ({
        result: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (
      (yourSelection === 'ROCK' && opponentSelection === 'PAPER') ||
      (yourSelection === 'SCISSORS' && opponentSelection === 'ROCK') ||
      (yourSelection === 'PAPER' && opponentSelection === 'SCISSORS')
    ) {
      this.setState(prevState => ({
        result: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }
    this.setState({isGameOver: true, yourSelection, opponentSelection})
  }

  render() {
    const {choicesList} = this.props
    const {
      isGameOver,
      score,
      result,
      yourSelection,
      opponentSelection,
    } = this.state
    return (
      <DivContainer>
        <Scorecard score={score} />
        {isGameOver ? (
          <ResultView
            onPlayAgain={this.onPlayAgain}
            result={result}
            yourSelection={yourSelection}
            opponentSelection={opponentSelection}
            choicesList={choicesList}
          />
        ) : (
          <GameView choicesList={choicesList} onSelect={this.onSelect} />
        )}
        <RulesCard />
      </DivContainer>
    )
  }
}
export default Game
