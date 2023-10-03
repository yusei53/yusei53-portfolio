"use client";

import { useEffect, useState } from "react";
import { Introduction } from "./components/organisms/Introduction";
import TabPanel from "./components/organisms/TabPanel";
import Header from "./components/organisms/Header";
import { Footer } from "./components/organisms/Footer";
// import Animation from "./components/molecule/Animation";

export default function Home() {
  // const [showText, setShowText] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowText(false);
  //   }, 2500);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <>
      {/* {showText && <Animation text="ゆせのportfolio" />}
      {!showText && ( */}
      <>
        <Header />
        <Introduction />
        <TabPanel />
        <Footer />
      </>
      {/* )} */}
    </>
  );
}
