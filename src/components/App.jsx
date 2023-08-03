// import React, { Component } from 'react';
import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from '../components/Section/Section';
import css from './App.module.css';

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage = (
    (feedback.good / countTotalFeedback) *
    100
  ).toFixed(2);

  const onLeaveFeedBack = item => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [item]: prevFeedback[item] + 1,
    }));
  };

  return (
    <div className={css.container}>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedBack={onLeaveFeedBack}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={countTotalFeedback}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  );
}
