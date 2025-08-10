import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <header>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { md: "space-between" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              sx={{
                height: 40,
                display: "block",
                marginRight: 2,
              }}
              alt="Comunidade Remédios Logo"
              src={logo}
            />
            <Typography
              sx={{ display: { xs: "none", md: "inline" } }}
              variant="h6"
            >
              MediCare Community
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Sobre Nós</Button>
            <Button color="inherit">Serviços</Button>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
          ></IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
