import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/tech boy.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />

        <div className={styles.aboutItems}>
          <p className={styles.aboutItemText}>
          I am currently completing my M.Tech in Information and Communication Technology at Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT), with a specialization in Machine Learning. My focus is on building and training machine learning models while also enhancing my skills in web development, particularly in creating digital solutions that are user-centric and accessible. I hold a Bachelor of Engineering from Gujarat Technological University and have a strong interest in NLP and backend technologies. My academic background and work experiences, including my time at Upstatement, reflect my dedication to promoting human engagement and inclusiveness through advanced digital solutions that prioritize accessibility and user interaction.
          </p>
        </div>
        {/* <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul> */}
      </div>
    </section>
  );
};
