import React from "react";
import Navbar from "./common/Navbar";
import Stats from "./Stats";
import Transactions from "./Transactions";

function Home() {
  return (
    <div className="flex-1">
      {/* Navbar */}
      <Navbar />

      <div className="w-4/5 mx-auto mt-10">
        {/* Stats Component */}
        <Stats />
        {/* Transactions Component */}
        <Transactions />
      </div>
    </div>
  );
}

export default Home;
