import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const initialState = {
  score: 0,
  yourImage: '',
  opponentImage: '',
  showScoreCard: false,
  result: '',
}

class PlayingView extends Component {
  state = initialState

  onClickRockButton = () => {
    const randomImage = choicesList[Math.floor(Math.random() * choicesList.length)].imageUrl

    if (randomImage === choicesList[0].imageUrl) {
      this.setState(prevState => ({
        score: prevState.score,
        result: 'IT IS DRAW',
      }))
    } else if (randomImage === choicesList[1].imageUrl) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (randomImage === choicesList[2].imageUrl) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    }

    this.setState({
      yourImage: choicesList[0].imageUrl,
      showScoreCard: true,
      opponentImage: randomImage,
    })
  }

  onClickScissorsButton = () => {
    const randomImage = choicesList[Math.floor(Math.random() * choicesList.length)].imageUrl

    if (randomImage === choicesList[1].imageUrl) {
      this.setState(prevState => ({
        score: prevState.score,
        result: 'IT IS DRAW',
      }))
    } else if (randomImage === choicesList[2].imageUrl) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (randomImage === choicesList[0].imageUrl) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    }

    this.setState({
      yourImage: choicesList[1].imageUrl,
      showScoreCard: true,
      opponentImage: randomImage,
    })
  }

  onClickPaperButton = () => {
    const randomImage = choicesList[Math.floor(Math.random() * choicesList.length)].imageUrl

    if (randomImage === choicesList[2].imageUrl) {
      this.setState(prevState => ({
        score: prevState.score,
        result: 'IT IS DRAW',
      }))
    } else if (randomImage === choicesList[0].imageUrl) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (randomImage === choicesList[1].imageUrl) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    }

    this.setState({
      yourImage: choicesList[2].imageUrl,
      showScoreCard: true,
      opponentImage: randomImage,
    })
  }

  renderPlayGame = () => (
    <>
      <button
        className="image-button"
        data-testid="rockButton"
        type="button"
        onClick={this.onClickRockButton}
      >
        <img
          src={choicesList[0].imageUrl}
          alt={choicesList[0].id}
          className="image"
        />
      </button>
      <button
        className="image-button"
        data-testid="scissorsButton"
        type="button"
        onClick={this.onClickScissorsButton}
      >
        <img
          src={choicesList[1].imageUrl}
          alt={choicesList[1].id}
          className="image"
        />
      </button>
      <button
        className="image-button"
        data-testid="paperButton"
        type="button"
        onClick={this.onClickPaperButton}
      >
        <img
          src={choicesList[2].imageUrl}
          alt={choicesList[2].id}
          className="image"
        />
      </button>
    </>
  )

  onClickPlayAgain = () => {
    this.setState({
      yourImage: '',
      opponentImage: '',
      showScoreCard: false,
      result: '',
    })
  }

  renderScoreCard = () => {
    const {yourImage, opponentImage, result} = this.state

    return (
      <>
        <div className="result-image-container">
          <div className="result-container">
            <p className="text">Your Choice</p>
            <img src={yourImage} alt="your choice" className="image" />
          </div>
          <div className="result-container">
            <p className="text">Opponent Choice</p>
            <img src={opponentImage} alt="opponent choice" className="image" />
          </div>
        </div>
        <div className="result">
          <p className="result-text">{result}</p>
          <button
            className="play-again-button"
            type="button"
            onClick={this.onClickPlayAgain}
          >
            PLAY AGAIN
          </button>
        </div>
      </>
    )
  }

  render() {
    const {score, showScoreCard} = this.state
    return (
      <div className="bg-container">
        <div className="header-container">
          <h1 className="text">
            Rock <br /> Paper <br /> Scissors
          </h1>
          <div className="score-container">
            <p className="score">Score</p>
            <p className="count">{score}</p>
          </div>
        </div>
        <div className="button-image-container">
          {showScoreCard ? this.renderScoreCard() : this.renderPlayGame()}
        </div>
        <Popup
          modal
          trigger={
            <button type="button" className="rules-button">
              Rules
            </button>
          }
          position="top right"
        >
          {close => (
            <div className="popup-container">
              <button
                className="icon-button"
                type="button"
                onClick={() => close()}
              >
                <RiCloseLine />
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="rules"
              />
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default PlayingView
