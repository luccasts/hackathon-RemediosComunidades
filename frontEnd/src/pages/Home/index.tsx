import { Box, Button, TextField, Typography } from "@mui/material";
import Header from "../../components/Header";
import axios from "axios";
import { useState } from "react";
import styles from "./home.module.css";

function Home() {
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
    <div>
      <Header />
      <Box>
        <Box
          className={styles.home}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" component="h1" color="primary">
            Cadastrar Remédio
          </Typography>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Box>
              <TextField
                type="text"
                id="outlined-password-input"
                label="Nome do Remédio"
                variant="outlined"
                autoComplete="current-password"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>

            <Box>
              <TextField
                type="number"
                id="outlined-password-input"
                label="Quantidade"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Box>
              <TextField
                type="date"
                id="outlined-password-input"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Box>
              <Button type="submit" variant="contained">
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Box>

      <Box>
        <Typography
          variant="h2"
          component="h1"
          color="primary"
          textAlign={"center"}
        >
          Remédios cadastrados.
        </Typography>
      </Box>
    </div>
  );
}

export default Home;
