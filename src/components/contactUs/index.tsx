import React from 'react'
import style from './contact.module.css';
import dynamic from 'next/dynamic';
import FlikrButton from '../flikerButton';
// const HANDSHAKEIMG = require("../../../public/contact/handshake.svg");


function Contact({url}: {url: string}) {
  return (
    <>
      <div className={style.contactContainer}>
        <div className={style.divContainer}>
          <div className={style.sectionOne}>
            <div>
              <img
                src={"/contact/handshake.svg"}
                alt="Your SVG description"
              ></img>
            </div>
          </div>
          <div className={style.sectionTwo}>
            {/* <TiltCard/> */}
            <div>
              <p>
                Let&apos;s make something extraordinary together.
              </p>
            </div>
            <FlikrButton url={url} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact