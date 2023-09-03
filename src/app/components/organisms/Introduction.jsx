import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function Introduction() {
  return (
    <Stack
      display="flex"
      direction="column"
      justifyContent="center"
      alignItems="Center"
      spacing={2}
      sx={{ py: 10 }}
    >
      <Avatar
        alt="logo"
        src=" "
        sx={{ width: 128, height: 128, boxShadow: 1 }}
      />
      <Stack spacing={2}>
        <Typography variant="h4">Yusei Imamura</Typography>
      </Stack>
    </Stack>
  );
}

export default Introduction;
