import { Box, Button, CircularProgress, Typography } from "@mui/material";
import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

import EnhancedTable from "../../components/Table";
import type { IData } from "../../types/types";

function Home() {
  const [data, setData] = useState<IData[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fecthRemedios() {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/remedios");
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
      const response = await axios.delete(
        `http://127.0.0.1:5000/api/remedios/${id}`,
      );
      setData(response.data);
    } catch (erro) {
      console.log(erro);
    } finally {
      setLoading(false);
    }
  }
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
                        <div>
                          <li key={d.id}>
                            {d.nome} - Quantidade: {d.quantidade} - Validade:
                            {d.validade}
                          </li>
                          <Button onClick={() => handleDelete(d.id)}>
                            Deletar
                          </Button>
                        </div>
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
