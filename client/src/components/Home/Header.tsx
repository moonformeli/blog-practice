import React, { useRef, useState } from "react";
import { classes } from "typestyle";
import styles from "./Header.scss";

enum EMenu {
  BLOG = "BLOG",
  ABOUT = "ABOUT"
}

const Header: React.FC = () => {
  const ulRef = useRef<HTMLUListElement>();
  const [selected, setSelected] = useState(EMenu.BLOG);
  const menus = Object.keys(EMenu).map((key, i) => {
    const isSelected = selected === EMenu[key];
    const onClick = () => {
      setSelected(EMenu[key]);
    };
    return (
      <li
        key={i}
        className={classes(styles.menuItem, isSelected && styles.selected)}
        onClick={onClick}
      >
        <a>{EMenu[key]}</a>
      </li>
    );
  });

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <h1 className={styles.homeTitle}>
          <a href="/">TECH</a>
        </h1>
        <ul className={styles.menu} ref={ulRef}>
          {menus}
        </ul>
      </nav>
      <section className={styles.descContainer}>
        <article className={styles.mainDesc}>
          Dairy Of
          <br /> Technology
        </article>
        <article>
          <p className={styles.subTitle}>
            기록하고싶은 내용을 끄적이는 공간입니다.
          </p>
          <p className={styles.subDesc}>
            개발자로 지내는 시간동안 알아낸 것들, 공유하고 싶은 것들을 적는 개인
            공간입니다. 부족하고 비전문적인 내용이 많을 수 있습니다만, 도움을
            얻고 가시는 분들이 있길 바랍니다. 출처만 남겨주시면 스크랩은
            가능합니다.
          </p>
        </article>
      </section>
    </header>
  );
};

export default Header;
