import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import type { IData } from "../../types/types";
import { useEffect, useState } from "react";

import { remediosService } from "../../api/remediosService";

export default function ModalEdit(props: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: IData | undefined;
  atualizar: () => Promise<void>;
}) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState<number>(0);
  const [validade, setValidade] = useState<string>("");
  useEffect(() => {
    if (props.open && props.data) {
      setNome(props.data.nome);
      setQuantidade(props.data.quantidade);
      setValidade(props.data.validade);
    }
  }, [props.data, props.open]);
  const handleClose = () => props.setOpen(false);

  async function handleSave(
    e: React.FormEvent<HTMLFormElement>,
    id: number | undefined,
  ) {
    e.preventDefault();
    if (id) {
      try {
        const response = await remediosService.updateRemedio(
          id,
          nome,
          quantidade,
          validade,
        );
        props.atualizar();
        handleClose();
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>
        <Typography variant="subtitle1" component="div">
          Editar Produto
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ padding: "1rem" }}>
          <form onSubmit={(e) => handleSave(e, props.data?.id)}>
            <Box sx={{ padding: "0 0 10px 0" }}>
              <TextField
                type="text"
                id="remedio-input"
                label="Nome do Remédio"
                variant="outlined"
                autoComplete="current-password"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Box>

            <Box>
              <TextField
                type="number"
                id="quantidade-input"
                label="Quantidade"
                autoComplete="current-password"
                value={quantidade}
                onChange={(e) => setQuantidade(parseInt(e.target.value))}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="subtitle1"
                component="label"
                color="primary"
                htmlFor="validade-input"
              >
                Validade
              </Typography>
              <TextField
                type="date"
                id="validade-input"
                value={validade}
                onChange={(e) => setValidade(e.target.value)}
              />
            </Box>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancelar
              </Button>
              <Button color="primary" type="submit">
                Salvar
              </Button>
            </DialogActions>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
