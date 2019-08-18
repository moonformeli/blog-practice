import React, { useEffect } from "react";
import { NextPage } from "next";
import axios from "axios";
import styles from "./index.scss";
import Nav from "../components/Home/Nav";

interface IList {
  [key: string]: string;
}

interface IApp {
  data: {
    lists: IList[];
  };
}

const App: NextPage<IApp> = ({ data }) => {
  return (
    <section className={styles.container}>
      <Nav />
      <article className={styles.main}>
        {data.lists.map((item, i) => {
          console.dir(item);
          const { no, title } = item;
          return (
            <div key={i}>
              no - {no}, title - {title}
            </div>
          );
        })}
      </article>
    </section>
  );
};

App.getInitialProps = async ({ req }): Promise<any> => {
  const response = await axios.get("http://localhost:5000/lists");

  return { data: response.data };
};

export default App;
