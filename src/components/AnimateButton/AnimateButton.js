import React from "react";

function AnimateButton({ children, animationStyle = {}, ...delegated }) {
  const [mostRecentAction, setMostRecentAction] = React.useState(null);

  let buttonAnimationStyles = {};
  if (mostRecentAction === "hovering") {
    buttonAnimationStyles = {
      transform: "translateY(-6px) rotate(30deg)",
      transition: "transform 250ms",
    };
  } else if (mostRecentAction === "depressed") {
    buttonAnimationStyles = {
      transform: "translateY(-2px) rotate(90deg)",
      transition: "transform 50ms",
    };
  } else if (mostRecentAction === "released") {
    buttonAnimationStyles = {
      transform: "translateY(-6px)",
      transition: "transform 200ms",
      animation: `circuler 400ms both`,
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
        className="animateButton"
        style={{
          ...buttonAnimationStyles,
          ...animationStyle,
        }}
        onMouseEnter={() => setMostRecentAction("hovering")}
        onMouseDown={() => setMostRecentAction("depressed")}
        onMouseUp={() => setMostRecentAction("released")}
        onMouseLeave={() => setMostRecentAction("exited")}
        onFocus={() => setMostRecentAction("hovering")}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setMostRecentAction("released");
          }
        }}
        {...delegated}
      >
        <span>{children}</span>
      </button>
    </>
  );
}

export default AnimateButton;
