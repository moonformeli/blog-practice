import React, { useEffect } from "react";
import axios from "axios";
import styles from "./index.scss";

const App: React.FC = () => {
  useEffect(() => {
    console.log("useEffect");
    axios
      .get("http://localhost:5000/lists")
      .then(res => {
        console.dir(res);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <div className={styles.container}>
      <span>Hello world</span>
    </div>
  );
};

export default App;
