import React from "react";

function Header() {
  return (
    <div>
      <div className="header ">
        <nav class="navbar navbar-expand-lg  fixed-top header">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img
                src="https://porkswap.finance/assets/images/logo.png"
                alt=""
                width={180}
              />
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="hhhhh">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item"></li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <b className="navfontcolor
                      "> Features</b>
                    </a>
                  </li>{" "}
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <b className="navfontcolor
                      ">Litepaper</b>
                    </a>
                  </li>{" "}
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <b className="navfontcolor
                      ">Platform</b>
                    </a>
                  </li>{" "}
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <b className="navfontcolor
                      ">Roadmap</b>
                    </a>
                  </li>{" "}
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <b className="navfontcolor
                      ">FAQs</b>
                    </a>
                  </li>{" "}
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <b className="navfontcolor
                      ">Audit Report</b>
                    </a>
                  </li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
