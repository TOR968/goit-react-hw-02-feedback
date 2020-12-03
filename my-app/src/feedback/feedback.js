import React, { Component } from 'react';
import './feedback.module.css';
// import ButtonEl from './buttonElem';

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

  countTotalFeedback() {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        {/* <ButtonEl /> */}
        <div>
          {Object.keys(this.state).map(item => (
            <button
              type="button"
              onClick={() => {
                this.setState(prevState => {
                  return { [item]: prevState[item] + 1 };
                });
              }}
            >
              {item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
        <h2>Statistics</h2>
        {/* Object.values(this.state).reduce((a, b) => a + b, 0) === 0 ? <Notification message="No feedback given">.: */}
        <ul>
          {Object.keys(this.state).map(item => (
            <li>
              {item[0].toUpperCase() + item.slice(1)}:{this.state[item]}
            </li>
          ))}
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </div>
    );
  }
}

export default Fedback;
