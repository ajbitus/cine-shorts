/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BiSolidSearch } from "react-icons/bi";

import styles from "./header.module.css";

export default function Header() {
 return (
  <header className={styles.header}>
   <nav>
    <div className={styles.title}>
     <Link href={"/video"}>
      <img src="/cine-shorts/assets/images/logo-inverted.png" alt="Cine Shorts Logo" />
      <h1>CineShorts</h1>
     </Link>
    </div>
    <div className={styles.actions}>
     <Link href={"/search"} className={styles.searchLink}>
      <BiSolidSearch />
     </Link>
    </div>
   </nav>
  </header>
 );
}
