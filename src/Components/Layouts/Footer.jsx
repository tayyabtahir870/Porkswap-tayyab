import React from "react";
import {AiFillMediumCircle} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {ImYoutube2} from 'react-icons/im'
import {BsTelegram} from 'react-icons/bs'

function Footer() {
  return (
    <div className="footerbackgroudcolor " >
      <div class="container text-center ">
        <div class="row">
          <div class="col-md-6 text-start my-5">
            <img src="https://porkswap.finance/assets/images/logo.png" alt="" width={180}></img>
            <p className="last-p my-3">
            Decentralized Spot and Futures <br /> Trading on Binance Smart Chain 
            </p>
          </div>
          <div class="col-md-6 my-5">
            <div className="mt-3 text-center">
            <AiFillMediumCircle size={30}/>  &nbsp;
            <AiOutlineTwitter size={30}/> &nbsp;
            <FaFacebookF size={25}/> &nbsp;
            <ImYoutube2 size={30}/> &nbsp;
            <BsTelegram size={25}/> &nbsp;
            <br />
            <br />
                    <p>exchange@porkswap.finance</p>
             
            
            </div>
            
          </div>
          <hr />

          <div>
            <p>Copyright © 2022 PorkSwap.finance</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
