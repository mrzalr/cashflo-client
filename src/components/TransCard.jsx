import React from "react";
import Formatter from "../utils/formatter";

function TransCard(props) {
  const trans = props.trans;
  const amount = trans.amount;
  const amountStr = Formatter.formatNumberWithCommas(amount);

  return (
    <>
      <div className="card w-full bg-base-100 rounded-none border-t-2 mt-1">
        <div className="card-body">
          <p className="text-primary font-medium">
            {trans.user} |{" "}
            <span className="font-normal text-slate-800">{trans.category}</span>
          </p>
          <h2 className="card-title">
            <span className="font-bold text-sm">IDR </span>
            {amountStr}
          </h2>
          <p>{trans.description}</p>
        </div>
      </div>
    </>
  );
}

export default TransCard;
