import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Feedback/Statistics/Statistics';
import { Section } from './Feedback/Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good: good, neutral: neutral, bad: bad };

  const handleClick = option => {
    if (option === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (option === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (option === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    const totalFeedback = options.good + options.neutral + options.bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage =
      (options.good / (options.good + options.neutral + options.bad)) * 100;
    return positiveFeedbackPercentage;
  };
  return (
    <Section title="Feedback section">
      <FeedbackOptions
        options={options}
        onLeaveFeedback={handleClick}
      ></FeedbackOptions>
      .
      <Statistics
        good={options.good}
        neutral={options.neutral}
        bad={options.bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      ></Statistics>
    </Section>
  );
};
