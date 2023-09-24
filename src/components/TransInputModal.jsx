import React, { useEffect, useState } from "react";
import Formatter from "../utils/formatter";

function TransInputModal(props) {
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://cashflo.domcloud.io/api/v1/users");
      const data = await response.json();
      setUsers(data.data);
    }

    async function fetchCategories() {
      const response = await fetch(
        "https://cashflo.domcloud.io/api/v1/categories"
      );
      const data = await response.json();
      setCategories(data.data);
    }

    fetchUsers();
    fetchCategories();
  }, []);

  const [user, setUser] = useState("question");
  const [category, setCategory] = useState("question");
  const [amount, setAmount] = useState("");
  const [description, setDesc] = useState("");

  const OnSubmit = (event) => {
    event.preventDefault();
    setUser("question");
    setCategory("question");
    setAmount("");
    setDesc("");

    const trans = {
      user_id: user,
      category_id: category,
      amount: Number(amount),
      description: description,
    };

    (async function () {
      const resp = await fetch(
        "https://cashflo.domcloud.io/api/v1/transactions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(trans),
        }
      );
      const r = await resp.json();
      props.onTransSubmited();
    })();

    document.getElementById("trans-modal").close();
  };

  return (
    <>
      <dialog id="trans-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add new transaction</h3>
          <form className="mt-2 flex flex-col gap-2">
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            >
              <option disabled value="question">
                Siapa ini ?
              </option>
              {users.map((user) => {
                return (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                );
              })}
            </select>
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option disabled value="question">
                Kategori
              </option>
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <input
              type="number"
              placeholder="Jumlah pengeluaran"
              value={amount}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setAmount(e.target.value)}
            />
            <textarea
              className="textarea textarea-bordered"
              placeholder="Deskripsi"
              value={description}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <button className="btn float-right mt-4" onClick={OnSubmit}>
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default TransInputModal;
