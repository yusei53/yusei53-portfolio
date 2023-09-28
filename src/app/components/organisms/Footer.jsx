import { Box } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      borderTop={1}
      borderColor={"grey.300"}
      textAlign={"center"}
      padding={"2% 0"}
    >
      © {new Date().getFullYear()} ゆせの Portfolio
    </Box>
  );
};
