import React, { useEffect } from "react";
import * as style from "./userguess.module.css";

function UserGuess({ newGuess, ...delegated }) {
  const [userGuess, setIsUserGuess] = React.useState("");
  const inputRef = React.useRef();
  function handleSubmit(event) {
    event.preventDefault();
    newGuess(userGuess);
    setIsUserGuess("");
  }

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userInput">Enter Guess: </label>

        <input
          type="text"
          id="userInput"
          ref={inputRef}
          minLength={5}
          required={true}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          value={userGuess}
          onChange={(event) => {
            const input = event.target.value.toUpperCase();
            setIsUserGuess(input);
          }}
          {...delegated}
        />
      </form>
    </>
  );
}

export default UserGuess;
