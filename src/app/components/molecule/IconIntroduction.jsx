import * as React from "react";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { Box } from "@mui/material";

export function IconIntroduction() {
  return (
    <Stack display="flex" direction="row" mt={2}>
      <Box marginRight={3}>
        <a href="https://github.com/yusei53">
          <Image
            src="/img/github-original.svg"
            height={50}
            width={50}
            alt="githubのIcon画像"
          />
        </a>
      </Box>
      <a href="https://twitter.com/yuseidayo53">
        <Image
          src="/img/twitter-original.svg"
          height={50}
          width={43}
          alt="TwitterのIcon画像"
        />
      </a>
    </Stack>
  );
}

export default IconIntroduction;
