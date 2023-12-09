import React from "react";
import * as style from "./stylegrid.module.css";
import { checkAnswer, checkAnswer } from "../../utility";
import { numberOfRows } from "../../constant";

function DisplayGrid({ guess, answer }) {
  return (
    <>
      <div className={style.GridWrapper}>
        {Array.from({ length: numberOfRows }).map((_, index) => {
          return <Row key={index} guess={guess[index]} answer={answer} />;
        })}
      </div>
    </>
  );
}

export default DisplayGrid;

function Row({ guess, answer }) {
  const getAnswer = checkAnswer(guess, answer);

  return (
    <div className={style.row}>
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <Cell
            key={index}
            alphabateInfo={getAnswer ? getAnswer[index] : undefined}
          />
        );
      })}
    </div>
  );
}

function Cell({ alphabateInfo = {} }) {
  const { alphabate = "", status = "" } = alphabateInfo;
  const cellStyle = `${style.cell} ${style[status]}`;

  return <span className={cellStyle}>{alphabate}</span>;
}
