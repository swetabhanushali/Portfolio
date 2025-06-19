import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sweta</h1>
        <p className={styles.description}>
          I’m a Front-End Developer from Belgium, excited to take on full-time
          or freelance roles as a Junior Front-End or Full-Stack Developer. I’m
          also open to Full-Stack internships to gain more hands-on experience.
          I’m happy to work anywhere in Europe or remote!{" "}
        </p>
        <a
          href="mailto:swetabhanushali7367@gmail.com"
          className={styles.contactBtn}
        >
          Let's Connect
        </a>
      </div>
      <img
        src={getImageUrl("hero/myphoto.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
