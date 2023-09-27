import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { Work } from "@/app/data/WorkList";

type TProps = {
  workList: Work;
};

const WorkCard: React.FC<TProps> = ({ workList }) => (
  <Card sx={{ width: "auto", margin: 1 }}>
    <CardMedia
      component="img"
      height={workList.imageHeight}
      image={`../img/workImage/${workList.imagePath}`}
      alt={workList.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h1" align="left">
        {workList.title}
      </Typography>
      <Typography
        variant="body2"
        component="span"
        color="text.secondary"
        align="left"
      >
        {workList.description.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </Typography>
    </CardContent>
    <Grid container spacing={1} sx={{ padding: 2 }}>
      {workList.tips.map((tips) => (
        <Grid item key={tips}>
          <Chip label={tips} variant="outlined" />
        </Grid>
      ))}
    </Grid>
  </Card>
);

export default WorkCard;
