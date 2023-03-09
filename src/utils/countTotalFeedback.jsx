const countTotalFeedback = function({good, neutral, bad}) {
    return good + neutral + bad;
}

export {countTotalFeedback};