import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  return (
    <div className='bg-secondary py-3'>
      <div className='w-50 mx-auto text-center  text-light fs-5'>
        <div>
          <p>
            Flat: 10D, House: 20, Road: 8, Block: D <br />
            UTTORA, SECTOR-6, Dhaka 1215
          </p>
        </div>
        <div>
          <p>
            +880-1707-111-999, contact@nijolcreative.com <br />
            <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2011 -{" "}
            {date.getFullYear()} | NijolCreative Photography.
          </p>
        </div>
        <div>
          <p className='condition'>
            <span>Terms & Conditions</span> | <span>Refund Policy</span> |{" "}
            <span>Blog</span> | <span>News</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
