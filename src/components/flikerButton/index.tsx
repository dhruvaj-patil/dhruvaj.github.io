'use client'
import React from 'react'
import style from './flkr.module.css';

function FlikrButton({url}:{url: string}) {
  return (
    <div>
      <button className={style.glowingBtn} onClick={e => window.open(`${url}`, '_blank')}>
        <span className={style.glowingTxt}>
          E<span className={style.faultyLetter}>M</span>AI
          <span className={style.faultyLetter}>L</span>
          &nbsp;
          <span className={style.faultyLetter}>NO</span>W
        </span>
      </button>
    </div>
  );
}

export default FlikrButton