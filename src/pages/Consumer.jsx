import React from "react";
import { Navbar } from "../components/navbar";
import { toast } from "react-hot-toast";

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

  const onClick = () => {
    toast.success("Entregue");
    // toast.promise(confirmed(), {
    //   loading: "Aguardando confirmação",
    //   success: "Entregue",
    //   error: "Tivemos um erro",
    // });
  };

  return (
    <div className="bg-white">
      <Navbar />
      <div className="container">
        <div className="text-center pt-20 lg:pt-40 lg:px-20">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Logchain - Delivery Status
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 py-4 sm:py-10">
            Logchain is a system that aims to solve the problem envolving lack
            of transparency on the traceability process of a product using
            blockchain technology and connect deliverers, sellers and consumers
            to our platform.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 sm:px-10 lg:px-40">
          <article
            onClick={onClick}
            className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 cursor-pointer"
          >
            <div>
              <strong className="block text-xl font-medium text-gray-900">
                Status da Entrega
              </strong>
            </div>
            <div className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
              <span className="text-xs font-medium"> Entregue </span>
            </div>
            <div className="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
              <span className="text-xs font-medium"> Não Entregue </span>
            </div>
          </article>
        </div>
      </div>
      {/* <div className="box">
        <h1>Status da entrega</h1>
        <button id="confirm" onClick={confirmed}>
          Entregue
        </button>
      </div> */}
    </div>
  );
};

export default Consumer;
