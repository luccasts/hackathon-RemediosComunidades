import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import Header from "../../components/Header";

import { useEffect, useState } from "react";
import type { IData } from "../../types/types";
import ModalEdit from "../../components/ModalEdit";
import { remediosService } from "../../api/remediosService";

function Home() {
  const [data, setData] = useState<IData[]>();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [dataValue, setDataValue] = useState<IData>();
  async function fecthRemedios() {
    try {
      const response = await remediosService.getAllRemedio();
      setData(response.data);
    } catch (erro) {
      console.error(erro);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fecthRemedios();
  }, []);
  async function handleDelete(id: number) {
    try {
      await remediosService.deleteRemedio(id);
      fecthRemedios();
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
    <Box display={"flex"} flexDirection={"column"} gap={"10rem"}>
      <Header />

      <Box component={"main"}>
        <Typography
          variant="h2"
          component="h1"
          color="primary"
          textAlign={"center"}
        >
          Remédios cadastrados
        </Typography>

        <Box color={"GrayText"} textAlign={"center"}>
          {loading ? (
            <div>
              <CircularProgress size="3rem" />
            </div>
          ) : (
            <div>
              <div>
                <Grid
                  justifyContent={"center"}
                  container
                  component={"ul"}
                  spacing={1}
                  sx={{ listStyle: "none" }}
                >
                  {data
                    ? data.map((d) => (
                        <li key={d.id}>
                          <Box
                            margin={2}
                            padding={5}
                            borderRadius={1}
                            boxShadow={"2px 1px 2px #00000013"}
                            maxWidth={500}
                            display={"flex"}
                            justifyContent={"center"}
                            flexDirection={"column"}
                            gap={2}
                            sx={{ width: { xs: "350px", md: "500px" } }}
                          >
                            <Box display={"flex"} alignItems={"Center"} gap={1}>
                              <Typography
                                color="primary"
                                variant="h6"
                                component={"p"}
                              >
                                Nome:
                              </Typography>
                              <Typography variant="h6" component={"p"}>
                                {d.nome}{" "}
                              </Typography>
                            </Box>
                            <Box
                              display={"flex"}
                              flexDirection={"column"}
                              gap={1}
                            >
                              <Box display={"flex"} gap={1}>
                                <Typography
                                  color="primary"
                                  variant="h6"
                                  component={"p"}
                                >
                                  Quantidade:
                                </Typography>
                                <Typography variant="h6" component={"p"}>
                                  {d.quantidade}
                                </Typography>
                              </Box>
                              {d.quantidade < 5 ? (
                                <Box textAlign={"start"}>
                                  <Typography color="error">
                                    {d.quantidade < 5
                                      ? "ESTOQUE ACABANDO!"
                                      : ""}
                                  </Typography>
                                </Box>
                              ) : (
                                ""
                              )}
                            </Box>

                            <Box display={"flex"} alignItems={"Center"} gap={1}>
                              <Typography
                                color="primary"
                                variant="h6"
                                component={"p"}
                              >
                                Validade:
                              </Typography>
                              <Typography variant="h6" component={"p"}>
                                {d.validade}
                              </Typography>
                            </Box>
                            <Box marginTop={2}>
                              <Button onClick={() => handleDelete(d.id)}>
                                Deletar
                              </Button>
                              <Button onClick={() => handleOpen(d)}>
                                Editar
                              </Button>
                            </Box>
                            <ModalEdit
                              setOpen={setOpen}
                              open={open}
                              data={dataValue}
                              atualizar={fecthRemedios}
                            />
                          </Box>
                        </li>
                      ))
                    : ""}
                </Grid>
              </div>
              <div>{/* <EnhancedTable teste={data}></EnhancedTable> */}</div>
            </div>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
