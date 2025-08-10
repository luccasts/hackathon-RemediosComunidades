import { Box, Button, TextField, Typography } from "@mui/material";
import styles from "./login.module.css";
import { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      console.log("Login bem-sucedido!", response.data);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          console.error("Erro do servidor:", err.response.data);
        } else {
          console.error("Erro de requisição:", err.message);
        }
      } else if (err instanceof Error) {
        console.error("Erro desconhecido:", err.message);
      } else {
        console.error("Erro inesperado:", err);
      }
    }
  }
  return (
    <div className={styles.container}>
      <Box className={styles.login}>
        <Typography variant="h2" component="h1">
          Login
        </Typography>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box>
            <TextField
              type="email"
              id="outlined-password-input"
              label="E-mail"
              variant="outlined"
              autoComplete="current-password"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          <Box>
            <TextField
              type="password"
              id="outlined-password-input"
              label="Senha"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
