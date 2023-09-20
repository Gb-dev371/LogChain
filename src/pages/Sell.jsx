import React from "react";

const Sell = () => {
  return (
    <div>
      <main>
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
      </main>
    </div>
  );
};

export default Sell;
