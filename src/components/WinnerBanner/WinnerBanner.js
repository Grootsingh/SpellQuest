import React from "react";
import PopupBanner from "../PopupBanner/PopupBanner";

function WinnerBanner({ attampt }) {
  return (
    <PopupBanner type="happy">
      {" "}
      <strong>Congratulations!</strong>{" "}
      {`Got it in ${attampt > 1 ? ` ${attampt} guesss` : ` ${attampt} guess`} `}
    </PopupBanner>
  );
}

export default WinnerBanner;
