import React, { useRef, useState } from 'react';
import { classes } from 'typestyle';
import styles from './Nav.scss';

enum EMenu {
  BLOG = 'BLOG',
  ABOUT = 'ABOUT',
}

const Nav: React.FC = () => {
  const ulRef = useRef<HTMLUListElement>();
  const [selected, setSelected] = useState(EMenu.BLOG);

  const menus = Object.keys(EMenu).map((key, i) => {
    const isSelected = selected === EMenu[key];
    const onClick = () => {
      setSelected(EMenu[key]);
    };
    return (
      <li key={i} className={classes(styles.menuItem, isSelected && styles.selected)} onClick={onClick}>
        <a>{EMenu[key]}</a>
      </li>
    );
  });

  return (
    <nav className={styles.container}>
      <h1 className={styles.homeTitle}>
        <a href="/">TECH</a>
      </h1>
      <ul className={styles.menu} ref={ulRef}>
        {menus}
      </ul>
    </nav>
  );
};

export default Nav;
