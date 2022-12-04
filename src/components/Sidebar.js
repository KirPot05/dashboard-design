import React from "react";
import { mainLinks, secondaryLinks, utilLinks } from "../mock/sidebar";
import NavList from "./common/NavList";

function Sidebar() {
  return (
    <div className="bg-white p-2 w-1/5 min-h-screen">
      {/* Header */}
      <div className="p-2 sticky top-0 z-10 bg-white">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a3/Artemis_Networks_logo.png"
            className="h-20 w-20"
            alt=""
          />
          {/* <span className="font-bold text-2xl">Artemis</span> */}
        </div>
      </div>

      <hr />
      {/* Primary Section */}
      <NavList heading="MAIN" links={mainLinks} nestedLinks />

      {/* Secondary Section */}
      <NavList heading="SECONDARY" links={secondaryLinks} nestedLinks />

      {/* Utils Section */}
      <NavList heading="" links={utilLinks} />
    </div>
  );
}

export default Sidebar;
