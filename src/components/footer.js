/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BiLogoGithub } from "react-icons/bi";
import { FiFilm } from "react-icons/fi";
import { HiHome, HiOutlineInformationCircle, HiViewList } from "react-icons/hi";

import styles from "./footer.module.css";

export default function Footer() {
 return (
  <footer className={styles.footer}>
   <div className={styles.footerTray}>
    <div className={styles.section}>
     <Link href={"/"} className={styles.actionLink}>
      <HiHome />
     </Link>
     <Link href={"/list"} className={styles.actionLink}>
      <HiViewList />
     </Link>
    </div>
    <div className={styles.section}>
     <Link href={"/info"} className={styles.actionLink}>
      <HiOutlineInformationCircle />
     </Link>
     <Link
      href={"https://github.com/ajbitus/cine-shorts"}
      target="_blank"
      className={styles.actionLink}
     >
      <BiLogoGithub />
     </Link>
    </div>
    <div className={styles.primaryActionLink}>
     <Link href={"/videos"}>
      <FiFilm />
     </Link>
    </div>
   </div>
  </footer>
 );
}
