import React from "react";

function SetCutOffModal() {
  return (
    <>
      <dialog id="category-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Set cut off date</h3>
          <form className="mt-2 flex flex-col gap-2">
            <input
              type="number"
              placeholder="01-31 (date)"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn float-right mt-4">Submit</button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default SetCutOffModal;
