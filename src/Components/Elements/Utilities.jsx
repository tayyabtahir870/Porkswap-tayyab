import React from "react";

function Utilities() {
  return (
    <div className="bacpic">
      <div className="text-center p-5">
        <h1>
          <b>$PSWAP</b> <b className="fontcolor">Utilities</b>{" "}
        </h1>

        <div class="container text-center my-5 pb-5">
          <div class="row">
            <div class="col ">
              <div class="card">
                <div class="card-body text-start pb-5">
                  <img
                    src="https://porkswap.finance/assets/images/u1.png"
                    alt=""
                    width={80}
                  />
                  <h5 class="card-title">Governance</h5>
                  <p class="card-text">
                    Vote to modify underlying protocol, change in pricing
                    oracle, futures funding rate, platform fees, list/de-list
                    tokens, new features
                  </p>
                </div>
              </div>
            </div>

            <div class="col ">
              <div class="card">
                <div class="card-body text-start p-4">
                    <img src="https://porkswap.finance/assets/images/u2.png" alt="" width={70} />
                  <h5 class="card-title">Incentives</h5>
                  <p class="card-text">
                    Liquidity providers will be incentivized in $PSWAP for their
                    participation in spot and leverage liquidity pools, and LP
                    tokens can be staked for ARR of around 125%.
                  </p>
                  
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <div class="card-body text-start">
                    <img src="https://porkswap.finance/assets/images/u3.png" alt="" width={70}/>
                  <h5 class="card-title">Deflation</h5>
                  <p class="card-text">
                    With a fixed supply of 1 million tokens, and only 200,000 in
                    circulation, $PSWAP token will increase in value overtime
                    since it'll be scarce and the team will buy back and burn
                    tokens from platform revenue generated through spot and
                    futures trading.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utilities;
