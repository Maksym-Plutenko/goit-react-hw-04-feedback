import { useState } from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

import { countTotalFeedback } from '../utils/countTotalFeedback';
import { countPositiveFeedbackPercentage } from '../utils/countPositiveFeedbackPercentage';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const eventTag = event.currentTarget.textContent.toLowerCase();

    if (eventTag === 'good') {
      setGood(good + 1);
    } else if (eventTag === 'neutral') {
      setNeutral(neutral + 1);
    } else if (eventTag === 'bad') {
      setBad(bad + 1);
    } else {
      console.log('Warning! Unexpected tag value!');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback({ good, neutral, bad }) === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback({ good, neutral, bad })}
            positivePercentage={countPositiveFeedbackPercentage({
              good,
              neutral,
              bad,
            })}
          />
        )}
      </Section>
    </div>
  );
};

export { App };
