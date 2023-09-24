import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 z-10">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Cashflo</a>
        </div>
        {/* <details className="dropdown dropdown-end">
          <summary className="m-1 btn border-none bg-white">Menu</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a
                onClick={() =>
                  document.getElementById("category-modal").showModal()
                }
              >
                Edit category
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  document.getElementById("cutoff-modal").showModal()
                }
              >
                Set cutoff date
              </a>
            </li>
          </ul>
        </details> */}
      </div>
    </>
  );
}

export default Navbar;
