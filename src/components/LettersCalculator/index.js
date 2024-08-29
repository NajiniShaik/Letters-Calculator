import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeCountValue = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="cards-container">
          <div className="detailed-card">
            <h1 className="title">Calculate the Letters you enter</h1>
            <label className="label" htmlFor="inputElement">
              Enter the phrase
            </label>
            <input
              id="inputElement"
              type="text"
              placeholder="Enter the Phrase"
              className="input-element"
              onChange={this.onChangeCountValue}
            />
            <p className="counter">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
