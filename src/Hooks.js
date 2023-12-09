import { resetContext } from "./components/Game";
import React, { useEffect } from "react";

function useSideDown(isPlay) {
  const [slideDown, setSlideDown] = React.useState({});
  const resetGame = React.useContext(resetContext);
  useEffect(() => {
    if (isPlay === "replay") {
      let timerID1 = setTimeout(() => {
        setSlideDown({
          animation:
            "1000ms cubic-bezier(0.63, 0, 0.48, 0.99) both running slideDown",
        });
      }, 400);

      let timerID2 = setTimeout(() => {
        resetGame();
        setSlideDown({});
      }, 1500);

      return () => {
        clearTimeout(timerID1);
        clearTimeout(timerID2);
      };
    }
  }, [isPlay]);

  return slideDown;
}

function useFadeAnimation(isOpen, handleIsOpen) {
  const [isFade, setisFade] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      {
        const timerID1 = setTimeout(() => {
          setisFade(true);
        }, 3.5 * 1000);
        const timerID2 = setTimeout(() => {
          handleIsOpen();
          setisFade(false);
        }, 4 * 1000);
        return () => {
          clearTimeout(timerID1);
          clearTimeout(timerID2);
        };
      }
    }
  }, [isOpen]);

  return isFade;
}

export { useSideDown, useFadeAnimation };
