const countPositiveFeedbackPercentage = function({good, neutral, bad}) {
    const result = Math.floor(good / (good + neutral + bad) * 100);
    return result || 0;
}

export {countPositiveFeedbackPercentage};