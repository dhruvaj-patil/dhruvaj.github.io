import React, { useRef } from 'react'
import styles from './text3d.module.css';
import { Text3dProps } from '.';


function Text3d(props: Text3dProps) {
    const text1 = useRef(null);
    const text2 = useRef(null);
    const { primary, secondary, url } = props;
    
    return (
        <div className={styles.textContainer}>
            <p className={styles.primary} ref={text1} >{primary} </p>
            <p className={styles.secondary} ref={text2} onClick={e => window.open(`${url}`, '_blank')}>{secondary}</p>
        </div>
    )
}

export default Text3d