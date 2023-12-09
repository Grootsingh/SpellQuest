const getAnswer = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const checkAnswer = function (guess, answer) {
  if (!guess) {
    return null;
  }
  const guessArr = guess.split("");
  const answerArr = answer.split("");
  const resultArr = [];
  //currect | incurrect | misplaced

  //currect
  for (let i = 0; i < guessArr.length; i++) {
    if (guessArr[i] === answerArr[i]) {
      resultArr[i] = { alphabate: guessArr[i], status: "correct" };
      guessArr[i] = "correct";
    }
  }
  //misplaced | incurrect
  for (let i = 0; i < guessArr.length; i++) {
    if (guessArr[i] === "correct") {
      continue;
    }
    const misplaced = answerArr.some((alphabate) => alphabate === guessArr[i]);
    if (misplaced) {
      resultArr[i] = { alphabate: guessArr[i], status: "misplaced" };
    } else {
      resultArr[i] = { alphabate: guessArr[i], status: "incorrect" };
    }
  }

  return resultArr;
};

export { getAnswer, checkAnswer };
