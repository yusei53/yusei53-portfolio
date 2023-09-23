import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { Work } from "@/app/data/WorkList";

type TProps = {
  workCard: Work;
};

const WorkCard: React.FC<TProps> = ({ workCard }) => (
  <Card sx={{ width: workCard.cardWidth }}>
    <CardMedia
      component="img"
      height={workCard.imageHeight}
      image={require(`../../img/${workCard.imagePath}`)}
      alt={workCard.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h1" align="left">
        {workCard.title}
      </Typography>
      <Typography
        variant="body2"
        component="span"
        color="text.secondary"
        align="left"
      >
        {workCard.description}
      </Typography>
    </CardContent>
    <Grid container spacing={1} sx={{ padding: 1 }}>
      {workCard.tips.map((tips) => (
        <Grid item key={tips}>
          <Chip label={tips} variant="outlined" />
        </Grid>
      ))}
    </Grid>
  </Card>
);

export default WorkCard;
