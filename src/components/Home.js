import Stats from "./Stats";
import Transactions from "./Transactions";

function Home() {
  return (
    <div className="w-10/12 2xl:w-4/5 mx-auto my-10">
      {/* Stats Component */}
      <Stats />
      {/* Transactions Component */}
      <Transactions />
    </div>
  );
}

export default Home;
