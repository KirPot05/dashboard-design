import UnderConstructionBg from "../../images/bg.svg";

function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-white m-10 space-y-10">
      <h2 className="text-4xl font-semibold">Under Construction</h2>
      <img
        className="h-4/5"
        alt="Website Under Maintenance Illustration"
        src={UnderConstructionBg}
      />
    </div>
  );
}

export default UnderConstruction;
