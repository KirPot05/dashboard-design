import React from "react";

function Badge({ content }) {
  return (
    <div className="bg-green-600 text-white px-3 py-1 font-semibold text-xs rounded-full">
      {content}
    </div>
  );
}

export default Badge;
