import React from "react";
import PriceInput from "../components/priceInput";
import { Navbar } from "../components/navbar";

const Sell = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen min-w-screen flex items-center justify-center">
        <section className="w-full min-w-screen relative flex flex-wrap lg:h-screen lg:items-center">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Get started today!
              </h1>
              <p className="mt-4 text-gray-500">
                LogChain is a system that aims to solve the problem envolving
                lack of transparency on the traceability process of a product
                using blockchain technology and connect deliverers, sellers and
                consumers to our platform. Get Started with the name of your
                product and the price.
              </p>
            </div>
            <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter Name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Price
                </label>
                <div className="relative">
                  <PriceInput />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Have any problems?
                  <a className="underline pl-2" href="">
                    Contact Us
                  </a>
                </p>
                <button
                  type="submit"
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
          <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
              alt="Welcome"
              src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </section>
        {/* <main>
        <div className="box">
          <h1>Add product</h1>
          <div id="forms" className="none">
            <form>
              <fieldset>
                <div className="flex">
                  <div>
                    <p>
                      <label htmlFor="name">
                        Name:{" "}
                        <input
                          type="text"
                          data-js="nameProduct"
                          id="name"
                          name="user_name"
                        />
                      </label>
                    </p>
                  </div>
                  <div>
                    <label htmlFor="name">
                      Price:{" "}
                      <input
                        type="text"
                        data-js="priceProduct"
                        name="user_name"
                      />
                    </label>
                  </div>
                  <br />
                  <div>
                    <input id="submit" type="submit" />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          <button id="addProduct" onClick="toShow();">
            View box
          </button>
          <div data-js="container">
            <div />
          </div>
        </div>
      </main> */}
      </div>
    </>
  );
};

export default Sell;
