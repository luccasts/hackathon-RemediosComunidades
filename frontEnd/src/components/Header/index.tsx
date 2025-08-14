import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

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

          <Box sx={{ display: { md: "flex" } }} component={"nav"}>
            <Button color="inherit" component={Link} to={"/"}>
              Home
            </Button>
            <Button color="inherit" component={Link} to={"/cadastrar"}>
              Cadastrar Remédio
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
