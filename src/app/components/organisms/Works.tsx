import WorkList from "@/app/data/WorkList";
import { Grid } from "@mui/material";
import WorkCard from "../molecule/WorkCard";

const Works = () => {
  return (
    <Grid container spacing={1} sx={{ p: "2%" }}>
      {WorkList.map((work) => (
        <Grid item key={work.title} xs={12} sm={6} md={4} lg={4} xl={4}>
          <WorkCard workList={work} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Works;
