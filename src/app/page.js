/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { FaArrowCircleDown, FaWindowClose } from "react-icons/fa";

import styles from "./page.module.css";

export default function Home() {
 const [showIndicator, setShowIndicator] = useState(true);

 return (
  <section className={styles.home}>
   <div className={styles.title}>
    <img src="/cine-shorts/assets/images/logo.png" alt="Cine Shorts Logo" />
    <h1>CineShorts</h1>
   </div>
   <div className={styles.description}>
    <p>Experience the cinema of by-gone era.</p>
   </div>
  </section>
 );
}
