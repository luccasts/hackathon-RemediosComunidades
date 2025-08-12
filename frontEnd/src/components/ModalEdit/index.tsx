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

export default function ModalEdit(props: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: IData | undefined;
}) {
  const [remedio, setRemedio] = useState();
  const [quantidade, setQuantidade] = useState();
  const [validade, setValidade] = useState();
  useEffect(() => {
    if (props.open) {
      setRemedio(props.data.nome);
      setQuantidade(props.data.quantidade);
      setValidade(props.data.validade);
    }
  }, [props.data, props.open]);
  const handleClose = () => props.setOpen(false);

  async function handleSave(id: number) {
    if (id) {
      // try {
      //   const response = await axios.put(
      //     `http://127.0.0.1:5000/api/remedios/${id}`,
      //   );
      //   setData(response.data);
      // } catch (erro) {
      //   console.log(erro);
      // } finally {
      //   setLoading(false);
      // }

      console.log(id);
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <Box sx={{ padding: "0 0 10px 0" }}>
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
          </form>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={() => handleSave(props.data?.id)} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
