import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

export default function SkillCard() {
  return (
    <>
      <Grid container spacing={1} padding={"3% 15%"}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
            <Card
              sx={{
                width: "auto",
                margin: 1,
              }}
            >
              <Box textAlign={"center"} mt={3}>
                <Image
                  width={100}
                  height={100}
                  src="/img/typescript.svg"
                  alt="typescript"
                />
              </Box>
              <CardContent>
                <Typography
                  textAlign={"center"}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  TypeScript
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
