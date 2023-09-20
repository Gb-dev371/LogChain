import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Navbar } from "../components/navbar";

const Delivery = () => {
  var statusDelivery;
  const confirmed = () => {
    const isConfirmed = confirm("Are you sure of this?");
    if (isConfirmed) {
      statusDelivery = true;
      // transfer some tokens to the deliverer address
    }
    console.log(nomo);

    // nomo.getWalletAddresses().then(function (wallet) {
    //     console.log(wallet);
    // }).catch(error);
  };

  const rejected = () => {
    const isRejected = confirm("Do you really want to reject?");
    if (!isRejected) {
      statusDelivery = false;
    }
  };

  return (
    <div>
      <Navbar />
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Take the Product.
              <strong className="font-extrabold text-red-700 sm:block">
                LogChain.
              </strong>
            </h1>
            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium bg-green-500 text-white shadow hover:bg-transparent hover:text-green-500 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
                href="/about"
              >
                Confirm
              </a>
              <a
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:text-white hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/get-started"
              >
                Reject
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="flex">
        <div className="box">
          <h1>Take the product</h1>
          <Button colorScheme="blue" onClick={confirmed}>
            Confirm
          </Button>
          <Button colorScheme="blue" onClick={rejected}>Reject</Button> */}
      {/* <button id="confirm" onClick="confirmed()">
            Confirm
          </button>
          <button id="reject" onClick="reject()">
            Reject
          </button> */}
      {/* </div>
      </div> */}
    </div>
  );
};

export default Delivery;
