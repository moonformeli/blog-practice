import React from "react";
import styles from "./Nav.scss";

const Nav: React.FC = () => {
  return (
    <nav className={styles.container}>
      <article className={styles.aboutMe}>
        <h3 className={styles.title}>Munkyu Yang</h3>
        <i className={styles.logo} />
        <p className={styles.description}>
          Hi, my name is Munkyu Yang and I'm a junior web front-end developer.
          Welcome to my personal blog!
        </p>
        <div className={styles.sitemap}>
          <a href="">
            <i className="fab fa-github" />
          </a>
          <a href="">
            <i className="fab fa-facebook" />
          </a>
        </div>
      </article>
      <hr className={styles.divider} />
      <article>
        <ul className={styles.category}>
          <li>카테고리 1</li>
          <li>카테고리 2</li>
          <li>카테고리 3</li>
          <li>카테고리 4</li>
        </ul>
      </article>
    </nav>
  );
};

export default Nav;
