import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";
import Image from "next/image";
import { Skill } from "@/app/data/SkillList";
import Link from "next/link";

type TProps = {
  skillCard: Skill;
};

const SkillCard: React.FC<TProps> = ({ skillCard }) => (
  <Card
    sx={{
      width: "auto",
      margin: 1,
    }}
  >
    <Link href={skillCard.sourcePath} style={{ textDecoration: "none" }}>
      <CardActionArea>
        <Box textAlign={"center"} mt={3}>
          <Image
            width={100}
            height={100}
            src={`../img/skillImage/${skillCard.imagePath}`}
            alt="typescript"
          />
        </Box>
        <CardContent>
          <Typography
            textAlign={"center"}
            gutterBottom
            variant="h6"
            color={"black"}
          >
            {skillCard.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Link>
  </Card>
);

export default SkillCard;
