import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SpentCard from "./SpentCard";
import TransCard from "./TransCard";
import TransInputModal from "./TransInputModal";
import SetCutOffModal from "./SetCutOffModal";

function Home() {
  const [trans, setTrans] = useState([]);
  const [totalTrans, setTotalTrans] = useState(0);
  const [submitted, setSubmitted] = useState(true);

  useEffect(() => {
    if (submitted) {
      const fetchTrans = async () => {
        const resp = await fetch(
          "https://cashflo.domcloud.io/api/v1/transactions"
        );
        const r = await resp.json();

        setTrans(r.data);

        let sum = 0;
        r.data.forEach((e) => (sum += e.amount));
        setTotalTrans(sum);
      };

      fetchTrans();

      setSubmitted(false);
    }
  }, [submitted]);

  const onTransSubmited = () => {
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-100 w-full flex justify-center">
      <div className="container flex flex-col h-screen w-[540px]">
        <Navbar />
        <div className="mx-2 grow flex flex-col">
          <SpentCard totalTrans={totalTrans} />
          <div className="grow basis-1 my-2 overflow-scroll">
            {trans && trans.map((e) => <TransCard key={e.id} trans={e} />)}
          </div>
          <TransInputModal onTransSubmited={onTransSubmited} />
          <SetCutOffModal />
        </div>
      </div>
    </div>
  );
}

export default Home;
