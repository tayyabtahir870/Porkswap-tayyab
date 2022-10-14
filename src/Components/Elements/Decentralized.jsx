import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Decentralized() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <div className="backpic my-5">
      <Particles
        id="tsparticlas"
        init={particlesInit}
        loaded={Particles}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          style: {
            position: "absolute",
            height: "100%",
            top: "0",
            left: "0",
          },
          particles: {
            number: {
              value: 10,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              options: {
                sides: 5,
              },
            },
            opacity: {
              value: 0.8,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: false,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            rotate: {
              value: 0,
              random: true,
              direction: "clockwise",
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 600,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: ["grab"],
              },
              onclick: {
                enable: false,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          background: {
            color: "",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />

      <div class="container  ">
        <div class="row  ">
          <div className="col-md-6 page1 text-start my-5">
            <p className="font1 color">
              Decentralized Spot and <br /> Futures Trading on BSC
            </p>
            <p className="color">
              Automated market maker powered, taking De-Fi game to the next
              level. Make instant spot exchange, leveraged trades, provide
              liquidity to earn returns and rewards.
            </p>
            <button type="button" class="btn btn-warning">
              Sopt Trading Platfrom Launched 🚀
            </button>
            <hr />
            <button type="button" class="btn btn-danger">
              Earn PSWAP
            </button>{" "}
            &nbsp;
            <button type="button" class="btn btn-danger">
              Trade on PCS
            </button>{" "}
            &nbsp;
            <br />
            <br />
            <button type="button" class="btn btn-danger">
              Governance
            </button>
          </div>

          <div className="col-md-6  my-5 ">
            <img
              className="img-fluid"
              src="Assests/pic1.png"
              alt=""
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Decentralized;
