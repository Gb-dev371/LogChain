import React from "react";

const Consumer = () => {
  const confirmed = () => {
    const isConfirmed = confirm("Are you sure of this?");
    if (isConfirmed) {
      // transfer some tokens to the deliverer address
    }
    console.log(nomo);

    // nomo.getWalletAddresses().then(function (wallet) {
    //     console.log(wallet);
    // }).catch(error);
  };

  return (
    <div className="bg-white">
      <div className="box">
        <h1>Status da entrega</h1>
        <button id="confirm" onClick={confirmed}>
          Entregue
        </button>
      </div>
    </div>
  );
};

export default Consumer;
