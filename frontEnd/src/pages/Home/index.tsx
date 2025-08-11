import { Box, CircularProgress, Typography } from "@mui/material";
import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./home.module.css";
import type { IData } from "../../types/types";
import EnhancedTable from "../../components/Table";

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
                        <li key={d.id}>
                          {d.nome} - Quantidade: {d.quantidade} - Validade:
                          {d.validade}
                        </li>
                      ))
                    : ""}
                </ul>
              </div>
              <div>
                <EnhancedTable teste={data}></EnhancedTable>
              </div>
            </div>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default Home;
