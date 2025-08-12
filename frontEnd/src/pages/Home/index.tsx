import { Box, Button, CircularProgress, Typography } from "@mui/material";
import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./home.module.css";
import type { IData } from "../../types/types";
import ModalEdit from "../../components/ModalEdit";
import { remediosService } from "../../api/remediosService";

function Home() {
  const [data, setData] = useState<IData[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [dataValue, setDataValue] = useState<IData>();
  useEffect(() => {
    async function fecthRemedios() {
      try {
        const response = await remediosService.getAllRemedio();
        console.log(response);
        setData(response.data);
      } catch (erro) {
        console.log(erro);
      } finally {
        setLoading(false);
      }
    }
    fecthRemedios();
  }, []);
  async function handleDelete(id: number) {
    try {
      await remediosService.deleteRemedio(id);
    } catch (erro) {
      console.log(erro);
    } finally {
      setLoading(false);
    }
  }

  const handleOpen = (d: IData) => {
    setDataValue(d);
    setOpen(true);
  };
  return (
    <div>
      <Header />

      <Box className={styles.home}>
        <Typography
          variant="h2"
          component="h1"
          color="primary"
          textAlign={"center"}
        >
          Remédios cadastrados.
        </Typography>

        <Box color={"GrayText"} textAlign={"center"}>
          {loading ? (
            <div>
              <CircularProgress size="3rem" />
            </div>
          ) : (
            <div>
              <div>
                <ul>
                  {data
                    ? data.map((d) => (
                        <Box
                          margin={2}
                          padding={2}
                          boxShadow={"2px 1px 2px #00000013"}
                        >
                          <li key={d.id}>
                            {d.nome} - Quantidade: {d.quantidade} - Validade:
                            {d.validade}
                          </li>
                          <Button onClick={() => handleDelete(d.id)}>
                            Deletar
                          </Button>
                          <Button onClick={() => handleOpen(d)}>Editar</Button>
                          <ModalEdit
                            setOpen={setOpen}
                            open={open}
                            data={dataValue}
                          />
                        </Box>
                      ))
                    : ""}
                </ul>
              </div>
              <div>{/* <EnhancedTable teste={data}></EnhancedTable> */}</div>
            </div>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default Home;
