import React from "react";
import Formatter from "../utils/formatter";

function SpentCard(props) {
  const d = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[d.getMonth()];

  const totalTransaction = props.totalTrans;
  const totalTransString = Formatter.formatNumberWithCommas(totalTransaction);

  return (
    <>
      <div className="card w-full bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Total transaction</h2>
          <h4 className="mt-[-10px] mb-4">{month}</h4>
          <p className="text-3xl font-bold">
            <span className="text-sm font-medium">IDR </span>
            {totalTransString}
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn"
              onClick={() => document.getElementById("trans-modal").showModal()}
            >
              add new
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpentCard;
