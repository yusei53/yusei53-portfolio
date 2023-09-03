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
        <Typography variant="h6">成蹊プログラミングサークル</Typography>
      </Stack>
      <Stack>
        <Typography variant="h6">Peach.tech代表🍑</Typography>
      </Stack>
    </>
  );
}

export default DetailIntroduction;
