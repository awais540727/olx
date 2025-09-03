import React from "react";
import styles from "./Car1.module.scss";

const Car = () => {
  return (
    <>
      <p>Car</p>
      <div className={styles.wraper}>
        <button className={styles.wraper__btn1}>BUTTON 1</button>
        <button className={styles.wraper__btn2}>BUTTON 2</button>
        <button className={styles.wraper__btn3}>BUTTON 3</button>
        <button className={styles.wraper__btn4}>BUTTON 4</button>
      </div>
    </>
  );
};

export default Car;
