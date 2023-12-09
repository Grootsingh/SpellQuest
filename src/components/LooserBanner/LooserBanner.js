import React from "react";
import PopupBanner from "../PopupBanner/PopupBanner";

function LooserBanner({ answer }) {
  return (
    <PopupBanner type="sad">{`Sorry, the correct answer is ${answer}.`}</PopupBanner>
  );
}

export default LooserBanner;
