import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
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
            <Button color="inherit" component={Link} to={"/"}>
              Home
            </Button>
            <Button color="inherit" component={Link} to={"/cadastrar"}>
              Cadastrar Remédio
            </Button>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 4, display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
