import { SkillList } from "@/app/data/SkillList";
import { Grid } from "@mui/material";
import SkillCard from "../molecule/SkillCard";

const Skills = () => {
  return (
    <Grid container spacing={1} padding={"3% 15%"}>
      {SkillList.map((skillcard) => (
        <Grid
          item
          key={skillcard.imagePath}
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
        >
          <SkillCard skillCard={skillcard} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Skills;
