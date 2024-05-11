import styles from './nav.module.css';
import { motion } from 'framer-motion';
import { footerLinks, links } from './data';
import { perspective, slideIn } from "./anim";

export default function index() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.body}>
          {links.map((link, i) => {
            const { title, href } = link;
            return (
              <div key={`b_${i}`} className={styles.linkContainer}>
                <motion.div
                  custom={i}
                  variants={perspective}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <a href={href}>{title}</a>
                </motion.div>
              </div>
            );
          })}
        </div>
        <motion.div className={styles.footer}>
          {footerLinks.map((link, i) => {
            const { title, href } = link;
            return (
              <motion.a
                variants={slideIn}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
                key={`f_${i}`}
                href={href}
              >
                {title}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}