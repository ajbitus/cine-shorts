/* eslint-disable @next/next/no-img-element */
"use client";
import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";

import styles from "./page.module.css";

export default function Video() {
 const searchParams = useSearchParams();

 const videoId = searchParams.get("id");

 if (!videoId) {
  redirect("/video?id=1");
 }

 return (
  <section className="">
   <div></div>
   <div>
    <div></div>
    <div>
     <a>
      <div>
       <img src="" alt="" />
      </div>
     </a>
    </div>
   </div>
  </section>
 );
}
