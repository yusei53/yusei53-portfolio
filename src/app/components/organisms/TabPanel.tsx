import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import CustomTabPanel from "../molecule/CustomTabPanel";

export default function TabPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="About" />
          <Tab label="Works" />
          <Tab label="Skills" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        About
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Works
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Skills
      </CustomTabPanel>
    </>
  );
}
