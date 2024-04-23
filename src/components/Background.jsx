import styles from "./Background.module.css"
import React from "react";

function Corner({ className }) {
  return (
    <svg className={className} style={{ zIndex: 1 }} xmlns="http://www.w3.org/2000/svg" width="301" height="416" viewBox="0 0 301 416" fill="none">
      <path d="M168 -152V59.1391L31.8545 241.856L-120 290" stroke="#D869FF"/>
      <path d="M104 -47V51.8819L40.6545 137.453L-30 160" stroke="#D869FF"/>
      <path d="M234 -66V128.42L109.2 296.668L-30 341" stroke="#D869FF"/>
      <path d="M300 -47V173.693L138.8 364.677L-41 415" stroke="#D869FF"/>
    </svg>
  );
}

export default function Background({ children }) {
  return (
    <React.Fragment>
      <Corner className={styles.topLeftDeco}/>
      <Corner className={styles.bottomRightDeco}/>
    </React.Fragment>
  );
}
