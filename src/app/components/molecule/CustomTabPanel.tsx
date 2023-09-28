import { Box, Typography } from "@mui/material";

type CustomTabPanel = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

export function CustomTabPanel(props: CustomTabPanel) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default CustomTabPanel;
