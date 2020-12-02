import React, { Component } from 'react';
import './feedback.module.css';

class Fedback extends Component {
  //   static propTypes = {
  //     title: T.string,
  //   };

  static defaultProps = {
    title: 'Please leave feedback',
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleIncrementBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={this.handleIncrementGood}>
            Good
          </button>
          <button type="button" onClick={this.handleIncrementNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleIncrementBad}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        {/* Total === 0 ? <Notification message="No feedback given">.: */}
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total: {Object.values(this.state).reduce((a, b) => a + b, 0)}</p>
        <p>
          Positive feedback:{' '}
          {(this.state.good * 100) /
            Object.values(this.state).reduce((a, b) => a + b, 0)}
          %
        </p>
      </div>
    );
  }
}

export default Fedback;
