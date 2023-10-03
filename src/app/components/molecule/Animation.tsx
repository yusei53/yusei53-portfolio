// import React, { useEffect, useState } from "react";
// import Typography from "@mui/material/Typography";
// import { styled } from "@mui/system";

// type TProps = {
//   text: string;
// };

// const TextAnimationWrapper = styled("div")({
//   fontSize: "1000px",
//   fontWeight: "bold",
//   overflow: "hidden",
//   whiteSpace: "nowrap",
//   position: "relative",
//   [`&::after`]: {
//     content: '""',
//     display: "inline-block",
//     height: "100%",
//     // width: 0,
//     // verticalAlign: "bottom",
//     // animation: `$slide-in 1s steps(1) forwards`,
//     position: "absolute",
//     top: 0,
//     left: 0,
//     bottom: 0,
//   },
//   "@keyframes slide-in": {
//     to: {
//       width: "100%",
//     },
//   },
// });

// const Animation: React.FC<TProps> = ({ text }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const animationInterval = setInterval(() => {
//       if (currentIndex < text.length) {
//         setDisplayedText((prevText) => prevText + text[currentIndex]);
//         setCurrentIndex((prevIndex) => prevIndex + 1);
//       } else {
//         clearInterval(animationInterval);
//       }
//     }, 100); // 100ミリ秒ごとに文字を表示

//     return () => clearInterval(animationInterval);
//   }, [text, currentIndex]);

//   return (
//     <TextAnimationWrapper>
//       <Typography variant="h4" component="div">
//         {displayedText}
//       </Typography>
//     </TextAnimationWrapper>
//   );
// };

// export default Animation;
