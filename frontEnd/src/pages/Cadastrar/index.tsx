import { Box, Button, TextField, Typography } from "@mui/material";
import Header from "../../components/Header";
import axios from "axios";
import styles from "./home.module.css";
import { useState } from "react";
import { axiosInstance } from "../../api/remedosInstance";
export default function CadastrarPage() {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [validade, setValidade] = useState("");
  const [message, setMessage] = useState("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("", {
        nome,
        quantidade,
        validade,
      });
      setMessage(`${response?.data.mensagem}`);
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
                focused
                color="primary"
                type="text"
                id="remedio-input"
                label="Nome do Remédio"
                variant="outlined"
                autoComplete="current-password"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                sx={{
                  // Estilo para o placeholder
                  "& .MuiInputBase-input::placeholder": {
                    color: "#1976d2",
                    opacity: 1,
                  },
                  // Estilo para o texto digitado
                  "& .MuiInputBase-input": {
                    color: "#1976d2", // Adicionei essa linha
                  },
                }}
              />
            </Box>

            <Box>
              <TextField
                focused
                color="primary"
                type="number"
                id="quantidade-input"
                label="Quantidade"
                autoComplete="current-password"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                sx={{
                  // Estilo para o placeholder
                  "& .MuiInputBase-input::placeholder": {
                    color: "#1976d2",
                    opacity: 1,
                  },
                  // Estilo para o texto digitado
                  "& .MuiInputBase-input": {
                    color: "#1976d2", // Adicionei essa linha
                  },
                }}
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
                focused
                color="primary"
                type="date"
                id="validade-input"
                value={validade}
                onChange={(e) => setValidade(e.target.value)}
                sx={{
                  "& .MuiInputBase-input::placeholder": {
                    // Use um código de cor hexadecimal ou uma palavra-chave
                    color: "#1976d2", // Exemplo de azul, ou use 'blue'
                    opacity: 1, // Garante que a cor seja totalmente visível
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Box>
              <Button type="submit" variant="contained">
                Cadastrar
              </Button>
            </Box>
          </form>

          {message ? (
            <Typography color="primary" component={"p"}>
              {message}
            </Typography>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </div>
  );
}
