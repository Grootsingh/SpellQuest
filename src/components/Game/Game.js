import React from "react";
import DisplayGrid from "../DisplayGrid";
import UserGuess from "../UserGuess";
import { data } from "./../../constant.js";
import { getAnswer } from "./../../utility.js";
import LooserBanner from "../LooserBanner/LooserBanner.js";
import WinnerBanner from "../WinnerBanner/WinnerBanner.js";

export const resetContext = React.createContext();
let answer = getAnswer(data);
console.log({ answer });

function Game() {
  //running | over
  const [gameStatus, isGameStatus] = React.useState({ status: "running" });
  const [guess, setGuess] = React.useState([]);

  function newGuess(input) {
    const nextGuess = [...guess, input];
    setGuess(nextGuess);
    if (input === answer) {
      isGameStatus({ status: "won", attampt: guess.length + 1 });
    }
    if (nextGuess.length === 6) {
      isGameStatus({ status: "lost" });
    }
  }

  function resetGame() {
    isGameStatus({ status: "running" });
    setGuess([]);
    answer = getAnswer(data);
    console.log({ answer });
  }

  return (
    <>
      <resetContext.Provider value={resetGame}>
        <DisplayGrid guess={guess} answer={answer} />
        <UserGuess
          newGuess={newGuess}
          disabled={gameStatus.status !== "running"}
        />
        {gameStatus.status === "won" && (
          <WinnerBanner attampt={gameStatus.attampt} />
        )}
        {gameStatus.status === "lost" && <LooserBanner answer={answer} />}
      </resetContext.Provider>
    </>
  );
}

export default Game;
