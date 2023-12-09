import React from "react";
import Game from "../Game";
import * as style from "./index.module.css";
import Help from "../Help/Help";

function App() {
  return (
    <>
      <header>
        <h1>Spell Quest</h1>
        <Help />
      </header>
      <main className={style.wrapper}>
        <Game />
      </main>
    </>
  );
}

export default App;
