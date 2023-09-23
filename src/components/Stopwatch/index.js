import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isRunning: false, timeElapsedinseconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  renderSeconds = () => {
    const {timeElapsedinseconds} = this.state
    const seconds = Math.floor(timeElapsedinseconds % 60)

    if (seconds < 10) {
      return `0{seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedinseconds} = this.state
    const minutes = Math.floor(timeElapsedinseconds / 60)
    if (minutes < 10) {
      return `0{minutes}`
    }
    return minutes
  }

  updateTime = () => {
    this.setState(prevstate => ({
      timeElapsedinseconds: prevstate.timeElapsedinseconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isRunning: true})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isRunning: false})
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isRunning: false, timeElapsedinseconds: 0})
  }

  render() {
    const {isRunning} = this.state
    const {time} = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="para">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="button-container">
              <button
                type="button"
                onClick={this.onStartTimer()}
                disabled={isRunning}
                className="start-btn button"
              >
                Start
              </button>
              <button
                type="button"
                onClick={this.onStopTimer()}
                className="stop-btn button"
              >
                Stop
              </button>
              <button
                type="button"
                onClick={this.onResetTimer()}
                className="reset-btn button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
