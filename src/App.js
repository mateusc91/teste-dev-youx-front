import React, { Component } from "react";
import { Switch,Route, Link } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import Login from "./components/login.component";
import AddPaciente from "./components/AddPaciente";
import ListarPacientes from "./components/ListarPacientes";
import Gerenciar from "./components/GerenciarPaciente";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Cadastro de Pacientes
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/pacientes"} className="nav-link">
              Listar Pacientes
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Adicionar Pacientes
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Gerenciamento
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/pacientes"]} component={ListarPacientes} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/add" component={AddPaciente} />
          <Route exact path="/gerenciar" component={Gerenciar} />
        </Switch>
      </div>
    </div>
  );
}

export default App;