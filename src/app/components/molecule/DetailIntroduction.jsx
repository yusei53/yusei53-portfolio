import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function DetailIntroduction() {
  return (
    <>
      <Stack m={1}>
        <Typography variant="h6">テニスコーチ🎾</Typography>
      </Stack>
      <Stack>
        <Typography variant="h6">成蹊エンジニア団体</Typography>
      </Stack>
      <Stack>
        <Typography variant="h6">PeachTech代表🍑</Typography>
      </Stack>
    </>
  );
}

export default DetailIntroduction;
