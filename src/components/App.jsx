import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Feedback/Statistics/Statistics';
import { Section } from './Feedback/Section/Section';

export const App = () => {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleClick = option => {
    console.log(options[option]);
    setOptions(prevOptions => ({
      ...prevOptions,
      [option]: prevOptions[option] + 1,
    }));
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
