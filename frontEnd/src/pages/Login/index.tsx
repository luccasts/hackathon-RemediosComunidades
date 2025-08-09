import { Box, Button, TextField, Typography } from "@mui/material";
import styles from "./login.module.css";
function LoginPage() {
  return (
    <div className={styles.container}>
      <Box className={styles.login}>
        <Typography variant="h2" component="h1">
          Login
        </Typography>
        <form action="">
          <Box>
            <TextField
              type="email"
              id="outlined-password-input"
              label="E-mail"
              variant="outlined"
              autoComplete="current-password"
            />
          </Box>

          <Box>
            <TextField
              type="password"
              id="outlined-password-input"
              label="Senha"
              autoComplete="current-password"
            />
          </Box>
          <Box>
            <Button type="submit" variant="contained">
              Entrar
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
}

export default LoginPage;
