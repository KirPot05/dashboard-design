import React from "react";
import { mainLinks, secondaryLinks, utilLinks } from "../mock/sidebar";
import NavList from "./common/NavList";

function Sidebar() {
  return (
    <div className="bg-white p-2 w-1/5 min-h-screen">
      {/* Header */}
      <div className="p-2 sticky top-0 z-10 bg-white">
        <span className="font-bold text-2xl">Artemis</span>
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
