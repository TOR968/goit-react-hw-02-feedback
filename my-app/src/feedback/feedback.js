import React, { Component } from 'react';

class ClassFedback extends Component {
  //   static defaultProps = {};
  constructor() {
    super();
    //     static propTypes = {};
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <h2>Statistics</h2>
        <span>Good:{this.state.good}</span>
        <span>Neutral:{this.state.neutral}</span>
        <span>Bad:{this.state.bad}</span>
      </div>
    );
  }
}

export default ClassFedback;
