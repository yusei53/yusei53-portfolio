import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DetailIntroduction } from "../molecule/DetailIntroduction";
import { IconIntroduction } from "../molecule/IconIntroduction";

export function Introduction() {
  return (
    <Stack
      display="flex"
      direction="column"
      justifyContent="center"
      alignItems="Center"
      sx={{ py: 5 }}
    >
      <Avatar
        alt="logo"
        src="../img/yuse.png"
        sx={{ width: 128, height: 128, boxShadow: 1 }}
      />
      <Stack mt={"15px"}>
        <Typography variant="h5" fontFamily={"monospace"}>
          Yusei Imamura
        </Typography>
      </Stack>
      <Stack>
        <Typography color="#868e96">App Developer</Typography>
      </Stack>
      <DetailIntroduction />
      <IconIntroduction />
    </Stack>
  );
}

export default Introduction;
