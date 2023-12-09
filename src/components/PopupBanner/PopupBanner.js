import React from "react";
import { useSideDown } from "../../Hooks";
import AnimationButton from "../AnimateButton";

function PopupBanner({ children, type }) {
  const [isPlay, setisPlay] = React.useState("running");
  const slideDownAnimation = useSideDown(isPlay);

  function handleIsPlaying() {
    setisPlay("replay");
  }
  const BannerStyle = `banner ${type} `;

  return (
    <div className={BannerStyle} style={{ ...slideDownAnimation }}>
      {children}
      <div className="replayMenu">
        <p>want to replay</p>
        <PopUpButton handleIsPlaying={handleIsPlaying} type={type} />
      </div>
    </div>
  );
}

export default PopupBanner;

function PopUpButton({ handleIsPlaying, type }) {
  const shadowType = type === "happy" ? "success" : "error";
  const shadow = `var(--color-${shadowType}-shadow)`;

  return (
    <>
      <div style={{ filter: `drop-shadow(5px 1px 2px ${shadow})` }}>
        <AnimationButton onClick={handleIsPlaying}>↻</AnimationButton>
      </div>
    </>
  );
}
