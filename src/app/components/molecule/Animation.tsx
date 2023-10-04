import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";

type TProps = {
  text: string;
};

const ParentTextAnimationWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#1876D1",
  color: "white",
});

const TextAnimationWrapper = styled("div")({
  fontSize: "75px",
  fontWeight: "bold",
});

const Animation: React.FC<TProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(animationInterval);
      }
    }, 200); // 100ミリ秒ごとに文字を表示

    return () => clearInterval(animationInterval);
  }, [text, currentIndex]);

  return (
    <ParentTextAnimationWrapper>
      <TextAnimationWrapper>{displayedText}</TextAnimationWrapper>
    </ParentTextAnimationWrapper>
  );
};

export default Animation;
