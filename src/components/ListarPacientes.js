import React, { useState, useEffect, useMemo, useRef } from "react";
import TutorialDataService from "../services/PacienteService";
import { useTable } from "react-table";

const ListarPacientes = (props) => {
  const [paciente, setPaciente] = useState([]);
  const PacienteRef = useRef();

  PacienteRef.current = paciente;

  useEffect(() => {
    retrieveTutorials();
  }, []);


  const retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then((response) => {
        setPaciente(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Nome",
        accessor: "nome",
      },
      {
        Header: "CPF",
        accessor: "cpf",
      },
      {
        Header: "Data de nascimento",
        accessor: "dob",
      },
      {
        Header: "Peso(kg)",
        accessor: "peso",
      },
      {
        Header: "Altura(m)",
        accessor: "altura",
      },
      {
        Header: "UF",
        accessor: "uf",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: paciente,
  });


  return (
    <div className="list row">
      <div className="col-md-12 list">
        <table
          className="table table-striped table-bordered"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarPacientes;