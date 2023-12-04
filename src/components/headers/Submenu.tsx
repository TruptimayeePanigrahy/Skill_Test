import React from "react";
import { Images } from "@/Constants/ImageData.js";
function Submenu() {
  return (
    <div className="hidden justify-between px-[100px] bg-PiSubheader p-3 md:flex">
      <div className="submenu">
        <p>Pre 11+</p>
        <img src={Images.VECTOR_ICON.LINK} alt={Images.VECTOR_ICON.ALT} />
      </div>
      <div className="submenu">
        <p>11+ Papers</p>
        <img src={Images.VECTOR_ICON.LINK} alt={Images.VECTOR_ICON.ALT} />
      </div>
      <div className="submenu">
        <p>13+ Papers</p>
        <img src={Images.VECTOR_ICON.LINK} alt={Images.VECTOR_ICON.ALT} />
      </div>
      <div className="submenu">
        <p>GCSE</p>
        <img src={Images.VECTOR_ICON.LINK} alt={Images.VECTOR_ICON.ALT} />
      </div>
      <div className="submenu">
        <p>SATs</p>
        <img src={Images.VECTOR_ICON.LINK} alt={Images.VECTOR_ICON.ALT} />
      </div>
      <div className="submenu">
        <p>Pre-Tests</p>
        <img src={Images.VECTOR_ICON.LINK} alt={Images.VECTOR_ICON.ALT} />
      </div>
      <div className="submenu">
        <p>Pricing</p>
        <img src={Images.VECTOR_ICON.LINK} alt={Images.VECTOR_ICON.ALT} />
      </div>
    </div>
  );
}

export default Submenu;
