"use client";

import { Footer } from "./components/organisms/Footer";
import { Header } from "./components/organisms/Header";
import { Introduction } from "./components/organisms/Introduction";
import TabPanel from "./components/organisms/TabPanel";

export default function Home() {
  return (
    <>
      <Introduction />
      <TabPanel />
    </>
  );
}
