import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

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

  const rejected = () =>{
    const isRejected = confirm("Do you really want to reject?")
    if(!isRejected){
      statusDelivery = false;
    }
  }

  return (
    <div>
      <div className="flex">
        <div className="box">
          <h1>Take the product</h1>
          <Button colorScheme="blue" onClick={confirmed}>
            Confirm
          </Button>
          <Button colorScheme="blue" onClick={rejected}>Reject</Button>
          {/* <button id="confirm" onClick="confirmed()">
            Confirm
          </button>
          <button id="reject" onClick="reject()">
            Reject
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
