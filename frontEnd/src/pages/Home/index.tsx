import { Box, Button, TextField, Typography } from "@mui/material";
import Header from "../../components/Header";
import axios from "axios";
import { useState } from "react";
import styles from "./home.module.css";

function Home() {
  const [remedio, setRemedio] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [validade, setValidade] = useState("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/remedios", {
        nome: remedio,
        quantidade,
        validade,
      });
      console.log("Remédio cadastrado!", response.data);
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
            gap: "2rem",
          }}
        >
          <Typography variant="h2" component="h1" color="primary">
            Cadastrar Remédio
          </Typography>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Box>
              <TextField
                type="text"
                id="remedio-input"
                label="Nome do Remédio"
                variant="outlined"
                autoComplete="current-password"
                value={remedio}
                onChange={(e) => setRemedio(e.target.value)}
              />
            </Box>

            <Box>
              <TextField
                type="number"
                id="quantidade-input"
                label="Quantidade"
                autoComplete="current-password"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="subtitle1" component="label" color="primary">
                Validade
              </Typography>
              <TextField
                type="date"
                id="validade-input"
                value={validade}
                onChange={(e) => setValidade(e.target.value)}
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
