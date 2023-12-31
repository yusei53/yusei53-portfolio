import * as React from "react";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { Box } from "@mui/material";

export function IconIntroduction() {
  return (
    <Stack display="flex" direction="row" mt={2}>
      <Box marginRight={3}>
        <a href="https://twitter.com/yuseidayo53" target="_blank">
          <Image
            src="/img/twitter-original.svg"
            height={50}
            width={45}
            alt="TwitterのIcon画像"
          />
        </a>
      </Box>
      <Box marginRight={3}>
        <a href="https://github.com/yusei53" target="_blank">
          <Image
            src="/img/github-original.svg"
            height={50}
            width={50}
            alt="githubのIcon画像"
          />
        </a>
      </Box>
      <Box marginRight={3}>
        <a href="https://qiita.com/yusei53" target="_blank">
          <Image
            src="/img/qiita.png"
            height={50}
            width={50}
            alt="qiitaのIcon画像"
          />
        </a>
      </Box>
      <a
        href="https://www.canva.com/design/DAFwLqVbbf0/EcrPUnfZpKFHLTfRgL63Uw/edit"
        target="_blank"
      >
        <Image
          src="/img/canva.png"
          height={52}
          width={50}
          alt="canvaのIcon画像"
        />
      </a>
    </Stack>
  );
}

export default IconIntroduction;
