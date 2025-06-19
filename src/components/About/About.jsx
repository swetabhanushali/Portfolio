
import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a React Front-End Developer with a strong foundation in
                building responsive, accessible, and modern web applications. I
                work extensively with React.js to create reusable components,
                manage state effectively using hooks, and build layouts that
                adapt seamlessly to different devices. I have experience using
                UI libraries like Tailwind CSS, Material UI, and Bootstrap to
                deliver clean and intuitive interfaces. My approach emphasizes
                performance, scalability, and user experience, ensuring that
                every project is not only visually appealing but also functional
                and maintainable.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I've completed over 100 hours of MERN stack training, covering
                everything from RESTful API development to MongoDB schema design
                and Node.js server logic. In addition to training, I’ve worked
                on freelance projects that involved building full-stack
                applications with real-world functionality.
              </p>
            </div>
          </li>
          
        </ul>

      
      </div>
    </section>
  );
};
