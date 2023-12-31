import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export function Header() {
  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              position: "absolute",
              left: 0,
            }}
          >
            ゆせの Portfolio
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
