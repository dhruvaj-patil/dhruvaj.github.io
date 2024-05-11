"use client"
import React from 'react'
import style from './contact.module.css';
import dynamic from 'next/dynamic';
import FlikrButton from '../flikerButton';
import { CldImage } from 'next-cloudinary';
// const HANDSHAKEIMG = require("../../../public/contact/handshake.svg");


function Contact({url}: {url: string}) {
  return (
    <>
      <div className={style.contactContainer}>
        <div className={style.divContainer}>
          <div className={style.sectionOne}>
            <div>
            <CldImage
                    width="824"
                    height="516"
                    src={'/contact/handshake_l1pco1.png'}
                    sizes="100vw"
                    alt="Let's get in Touch"
                    className={style.img}
                  />
              {/* <img
                src={"/contact/handshake.svg"}
                alt="Your SVG description"
              ></img> */}
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