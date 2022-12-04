import React, { useState } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

function Transactions() {
  const [data, setData] = useState([]);

  const columns = [
    "Invoice ID",
    "Date",
    "Description",
    "Status",
    "Descriptions",
  ];

  return (
    <div className="mt-10 bg-white p-5">
      <div>
        <h4>Recent Transactions</h4>
        <button>Export</button>
      </div>

      <div>
        <button> Incoming </button>
        <button> Invoices </button>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <td>
                <p className="flex items-center">
                  {idx === 0 && <input type="checkbox" />}
                  <span> {col} </span>
                  <ChevronUpDownIcon className="h-5 w-5" />
                </p>
              </td>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default Transactions;
