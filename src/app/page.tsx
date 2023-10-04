"use client";

import { useEffect, useState } from "react";
import { Introduction } from "./components/organisms/Introduction";
import TabPanel from "./components/organisms/TabPanel";
import Header from "./components/organisms/Header";
import { Footer } from "./components/organisms/Footer";
import Animation from "./components/molecule/Animation";
import { keyframes, styled } from "@mui/system";

export default function Home() {
  const [showText, setShowText] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
      setPageLoaded(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

  const WelcomeContainer = styled("div")({
    animation: `${fadeIn} 2s ease`,
    /* 他のスタイルプロパティを追加できます */
  });

  return (
    <>
      {showText && <Animation text="ゆせのportfolio☺︎" />}
      {!showText && pageLoaded && (
        <>
          <WelcomeContainer>
            <Header />
            <Introduction />
            <TabPanel />
            <Footer />
          </WelcomeContainer>
        </>
      )}
    </>
  );
}
