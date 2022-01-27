import http from "../http-common";

const getAll = () => {
  return http.get("/listar");
};

const create = (data) => {
  return http.post("/cadastrar", data);
};

const PacienteService = {
  getAll,
  create
};

export default PacienteService;