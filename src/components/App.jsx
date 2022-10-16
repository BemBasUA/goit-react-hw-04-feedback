import { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Feedback/Statistics/Statistics';
import { Section } from './Feedback/Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage =
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100;
    return positiveFeedbackPercentage;
  };

  render() {
    const data = this.state;
    return (
      <Section title="Feedback section">
        <FeedbackOptions
          options={data}
          onLeaveFeedback={this.handleClick}
        ></FeedbackOptions>
        .
        <Statistics
          good={data.good}
          neutral={data.neutral}
          bad={data.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    );
  }
}
