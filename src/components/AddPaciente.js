  import React, { useState } from "react";
  import PacienteService from "../services/PacienteService";

  const AddPaciente = () => {
    const initialPacienteState = {
      cpf: "",
      nome: "",
      email: "",
      dob: "",
      peso: "",
      altura: "",
      uf: ""
    };
    const [paciente, setPaciente] = useState(initialPacienteState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
      const { name, value } = event.target;
      setPaciente({ ...paciente, [name]: value });
    };

    const salvarPaciente = () => {
      var data = {
        cpf: paciente.cpf,
        nome: paciente.nome,
        email: paciente.email,
        dob: paciente.dob,
        peso: paciente.peso,
        altura: paciente.altura,
        uf: paciente.uf
      };

      PacienteService.create(data)
        .then(response => {
          setPaciente({
            cpf: response.data.cpf,
            nome: response.data.nome,
            email: response.data.email,
            dob: response.data.dob,
            peso: response.data.peso,
            altura: response.data.altura,
            uf: response.data.uf
          });
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };

    const novoPaciente = () => {
      setPaciente(initialPacienteState);
      setSubmitted(false);
    };

    return (
      <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Paciente cadastrado com sucesso!</h4>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Nome</label>
            <input
              type="text"
              className="form-control"
              id="nome"
              required
              value={paciente.nome}
              onChange={handleInputChange}
              name="nome"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">CPF</label>
            <input
              type="text"
              className="form-control"
              id="cpf"
              required
              value={paciente.cpf}
              onChange={handleInputChange}
              name="cpf"
            />
          </div>

          <div className="form-group">
            <label htmlFor="paciente">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              required
              value={paciente.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="paciente">Data de Nascimento (dd/mm/yyyy)</label>
            <input
              type="text"
              className="form-control"
              id="dob"
              required
              value={paciente.dob}
              onChange={handleInputChange}
              name="dob"
            />
          </div>

          <div className="form-group">
            <label htmlFor="paciente">Peso</label>
            <input
              type="text"
              className="form-control"
              id="peso"
              required
              value={paciente.peso}
              onChange={handleInputChange}
              name="peso"
            />
          </div>

          <div className="form-group">
            <label htmlFor="paciente">Altura</label>
            <input
              type="text"
              className="form-control"
              id="altura"
              required
              value={paciente.altura}
              onChange={handleInputChange}
              name="altura"
            />
          </div>

          <div className="form-group">
            <label htmlFor="paciente">Estado: (somente a sigla ex: BA)</label>
            <input
              type="text"
              className="form-control"
              id="uf"
              required
              value={paciente.uf}
              onChange={handleInputChange}
              name="uf"
            />
          </div>
            <br></br>
          <button onClick={salvarPaciente} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
    );
  };

  export default AddPaciente;