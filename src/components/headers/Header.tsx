import React from "react";
import Banner from "./Banner";
import Mainmenu from "./Mainmenu";
import Submenu from "./Submenu";

function Header() {
  return (
    <section className="sticky top-0 z-50">
      <Banner />
      <Mainmenu />
      <Submenu />
    </section>
  );
}

export default Header;
