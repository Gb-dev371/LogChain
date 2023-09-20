import React from "react";
import { Navbar } from "../components/navbar";
import { toast } from "react-hot-toast";
import { ethers } from "ethers";

const Consumer = () => {
  const [tx, setTx] = React.useState("");
  async function transferPinky() {
    const url = "https://smart.zeniq.network:9545";
    const provider = new ethers.JsonRpcProvider(url);

    const mnemonic =
      "beef token glow attitude write tobacco tide game erosion zero amount physical";

    const contractAddr = "0x568B9fFAD54646f28c2493548B86f6F83B81fE05";
    const contractAbi = [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "subtractedValue",
            type: "uint256",
          },
        ],
        name: "decreaseAllowance",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "addedValue",
            type: "uint256",
          },
        ],
        name: "increaseAllowance",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];

    const sender = ethers.Wallet.fromPhrase(
      "beef token glow attitude write tobacco tide game erosion zero amount physical",
      provider
    );

    const receiver = ethers.Wallet.fromPhrase(
      "danger blood science scale welcome purity rhythm dismiss grass chicken burden above",
      provider
    );

    const contract = new ethers.Contract(contractAddr, contractAbi, provider);

    const contractWithSigner = contract.connect(sender);

    const numberOfTokens = ethers.parseUnits("0.01");
    console.log(`numberOfTokens: ${numberOfTokens}`);

    const tx = await contractWithSigner.transfer(
      await receiver.getAddress(),
      numberOfTokens
    );

    await tx.wait();

    // console.log(tx);
    setTx(tx.hash);
  }

  const confirmed = () => {
    const isConfirmed = confirm("Are you sure of this?");
    if (isConfirmed) {
      // transfer some tokens to the deliverer address
      transferPinky().catch(console.error);
    }
  };

  const onClick = () => {
    toast.success("Delivered");
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
            blockchain technology and to connect deliverers, sellers and
            consumers to our platform.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 sm:px-10 lg:px-40">
          <article
            onClick={onClick}
            className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 cursor-pointer"
          >
            <div>
              <strong className="block text-xl font-medium text-gray-900">
                Delivery
              </strong>
            </div>
            <div className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
              <span onClick={confirmed} className="text-xs font-medium">
                {" "}
                Delivered{" "}
              </span>
            </div>
            <div className="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
              <span className="text-xs font-medium"> Not delivered </span>
            </div>
          </article>
          {tx && `Transaction hash: ${tx}`}
        </div>
      </div>
    </div>
  );
};

export default Consumer;
