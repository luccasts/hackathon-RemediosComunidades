import { axiosInstance } from "./remedosInstance";

export const remediosService = {
  updateRemedio: async (
    id: number,
    nome: string,
    quantidade: number,
    validade: string,
  ) => {
    try {
      const response = await axiosInstance.put(`/${id}`, {
        nome,
        quantidade,
        validade,
      });
      return response.data;
    } catch (erro) {
      console.error(erro);
    }
  },
  deleteRemedio: async (id: number) => {
    try {
      await axiosInstance.delete(`/${id}`);
      console.log(`Remédio com ID ${id} deletado com sucesso.`);
    } catch (erro) {
      console.log("aa");
      console.error("Erro ao deletar o remédio:", erro);
      console.error(erro);
    }
  },
  getAllRemedio: async () => {
    try {
      const response = await axiosInstance.get("");
      return response;
    } catch (erro) {
      console.error("Erro ao buscar os remédios:", erro);
      throw erro;
    }
  },
};
