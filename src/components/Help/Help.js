import React from "react";
import * as style from "./help.module.css";
import { useFadeAnimation } from "../../Hooks.js";

function Help() {
  const [isOpen, setIsOpen] = React.useState(false);
  const isFade = useFadeAnimation(isOpen, handleIsOpen);

  function handleIsOpen() {
    setIsOpen((currentisOpen) => !currentisOpen);
  }

  return (
    <>
      <div className={style.dialogWrapper}>
        <dialog
          open={isOpen}
          style={{
            animation: isFade && `${style.fadeout}  500ms ease-in both`,
          }}
        >
          <div className={style.decoration} />
          <p>Check Console.log for Answer</p>
        </dialog>
        <HelpButton handleIsOpen={handleIsOpen}>?</HelpButton>
      </div>
    </>
  );
}

function HelpButton({ children, handleIsOpen }) {
  const [mostRecentAction, setMostRecentAction] = React.useState(null);

  let buttonAnimationStyles = {};
  if (mostRecentAction === "hovering") {
    buttonAnimationStyles = {
      transform: "translateY(-6px) scale(1.2) rotate(30deg)",
      opacity: "0.9",
      transition: "transform 250ms",
    };
  } else if (mostRecentAction === "depressed") {
    buttonAnimationStyles = {
      transform: "translateY(-2px) scale(1.2) rotate(30deg)",
      opacity: "0.9",
      transition: "transform 50ms",
    };
  } else if (mostRecentAction === "released") {
    buttonAnimationStyles = {
      transform: "translateY(-6px) scale(1.2) rotate(30deg)",
      opacity: "0.9",
      transition: "transform 200ms",
    };
  } else if (mostRecentAction === "exited") {
    buttonAnimationStyles = {
      transform: "translateY(-4px) ",
      transition: "transform 500ms",
    };
  }

  return (
    <>
      <button
        className={style.helpButton}
        style={{
          ...buttonAnimationStyles,
        }}
        onMouseEnter={() => setMostRecentAction("hovering")}
        onMouseDown={() => setMostRecentAction("depressed")}
        onMouseUp={() => setMostRecentAction("released")}
        onMouseLeave={() => setMostRecentAction("exited")}
        onFocus={() => setMostRecentAction("hovering")}
        onKeyUp={(event) => {
          if (event.key === "Tab") {
            setMostRecentAction("hovering");
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Tab") {
            setMostRecentAction(null);
          }
          if (event.key === "Enter") {
            setMostRecentAction("released");
          }
          if (event.key === "Escape") {
            handleIsOpen();
          }
        }}
        onClick={handleIsOpen}
      >
        <span>{children}</span>
      </button>
    </>
  );
}

export default Help;
