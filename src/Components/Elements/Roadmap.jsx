import React from "react";

function Roadmap() {
  return (
    <div className="roadmap-backpic">
      <div className="text-center ">
        <h1>
          {" "}
          <b> Product</b> <b className="fontcolor "> Roadmap</b>{" "}
        </h1>
        <img
          className="img-fluid my-5"
          src="https://porkswap.finance/assets/images/porkswap-timeline.png"
          alt=""
          width={900}
        />
        <hr />
        <div class="container text-center">
          <div class="row">
            <div class="col-md-6 my-5 pb-5">
                <img className="img-fluid" src="https://porkswap.finance/assets/images/gov.png" alt="" width={500} />
            </div>
            <div class="col-md-6 my-5 pb-5">
                <h2>Governance Platform</h2>
                <button type="button" class="btn btn-warning">Launched, Start Voting Now</button>
                <p className="text-start fw-bold">You'll be able to vote for:</p>

                <ul className="text-start">
                    <li>Change in underlying protocol</li>
                    <li>Change in pricing oracle</li>
                    <li>Change in futures funding rate</li>
                    <li>Change in platform fees</li>
                    <li>Change inlist/de-list tokens</li>
                    <li>Propose new features</li>
                </ul>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
