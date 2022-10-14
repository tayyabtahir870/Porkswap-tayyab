import React from "react";

function Seen() {
  return (
    <div className="backpicseen">
      <div className="font2">
        <b>As seen on</b>
      </div>
      <div className="text-center my-5">
        <img
          className="img-fluid"
          src="https://porkswap.finance/assets/images/featured/02246f50-3412-11eb-bfdd-de89f8b3b8b8.png"
          alt=""
          width={150}
        />{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          src="https://porkswap.finance/assets/images/featured/logo-bloomberg.svg"
          alt=""
          width={150}
        />{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          src="https://porkswap.finance/assets/images/featured/logo-benzinga.webp"
          alt=""
          width={150}
        />{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          src="https://porkswap.finance/assets/images/featured/news-btc.png"
          alt=""
          width={150}
        />{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
      </div>
      <hr />
      <div>
        <div class="container text-center my-5">
          <div class="row">
            <div class="col ">
              <img
                src="https://porkswap.finance/assets/images/features/f1.svg"
                alt=""
                width={70}
              />
              <h5 className="my-3">Deflationary</h5>
              <p>
                While other spot platform tokens mint 750,000 tokens per day,
                we're aiming to burn 10% everyday through the revenue generated
                from the platform. Increasing the value of token over 30X within
                a year.
              </p>
            </div>

            <div class="col card1 spotbox">
              <img
                src="https://porkswap.finance/assets/images/features/f2.svg"
                alt=""
                width={70}
              />

              <h5 className="my-3">Community Governance</h5>
              <p>
                We believe in democratizing access to finance, what else can be
                a better way to give entire power to the community. Create
                custom polls, vote for good ones, bring new ideas to the table,
                change the world for better.
              </p>
            </div>

            <div class="col">
              <img
                src="https://porkswap.finance/assets/images/features/f3.svg"
                alt=""
                width={70}
              />
              <h5 className="my-3">Future Trading</h5>
              <p>
                Bringing forward the true meaning of De-Fi that's decentralizing
                current financial products, bringing derivatives through futures
                trading so you can increase your returns on profit. Buy long or
                sell short, it's on you.
              </p>
            </div>
          </div>
        </div>

        <div class="container text-center">
          <div class="row">
            <div class="col spotbox">
              <img
                src="https://porkswap.finance/assets/images/features/f6.svg"
                alt=""
                width={70}
              />

              <h5 className="my-3 ">Spot Trading</h5>
              <p>
                Improved automated market maker to provide instant fulfillment
                of orders with less slippage, exchange your favourite tokens
                with 10 times less gas than Ethereum.
              </p>
            </div>
            <div class="col">
              <img
                src="https://porkswap.finance/assets/images/features/f4.svg"
                alt=""
                width={70}
              />

              <h5 className="my-3">Lottery</h5>
              <p>
                Try your luck by gambling the extra tokens that you made by
                providing liquidity, with a chance to 100X your investment.
              </p>
            </div>

            <div class="col spotbox">
              <img
                src="https://porkswap.finance/assets/images/features/f5.svg"
                alt=""
                width={70}
              />

              <h5 className="my-3">Security</h5>
              <p>
                While other projects are getting DNS hijacked, we ensure the
                security of our platform from DNS all the way to Smart Contract
                are state-of-the-art secured.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <img
          src="https://porkswap.finance/assets/images/featured/cmc-logo.png"
          alt=""
          width={200}
        />{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          src="https://porkswap.finance/assets/images/featured/cg-logo.webp"
          alt=""
          width={200}
        />{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          src="https://porkswap.finance/assets/images/featured/hb-logo.png"
          alt=""
          width={150}
        />{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          src="https://porkswap.finance/assets/images/featured/cb-logo.png"
          alt=""
          width={150}
        />{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
      </div>
    </div>
  );
}

export default Seen;
