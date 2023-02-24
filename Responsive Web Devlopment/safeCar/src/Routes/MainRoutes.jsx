import React from "react";
import { Route, Routes } from "react-router-dom";
import AreaUser from "../components/AreaUsuario/AreaUser";
import ControleAcesso from "../components/AreaUsuario/ControleAcesso";
import Editar from "../components/AreaUsuario/Editar";
import InfoPessoal from "../components/AreaUsuario/InfoPessoal";
import PlanosSaude from "../components/AreaUsuario/PlanosSaude";
import Software from "../components/AreaUsuario/Software";
import Cadastro from "../components/FormulariosAcesso/Cadastro";
import FormCarro from "../components/FormulariosAcesso/FormCarro";
import Login from "../components/FormulariosAcesso/Login";
import Home from "../components/PaginaInicial/Home";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/usuario/cadastro-usuario" element={<Cadastro/>} />
            <Route path="/usuario/login" element={<Login/>} />
            <Route path="/veiculo/cadastro-veiculo" element={<FormCarro/>} />
            <Route path="/area-usuario" element={<AreaUser/>} />
            <Route path="/info-pessoal" element={<InfoPessoal/>} />
            <Route path="/controle-acesso" element={<ControleAcesso/>} />
            <Route path="/plano-saude" element={<PlanosSaude/>} />
            <Route path="/software" element={<Software/>} />
            <Route path='/editar-usuario/:id' element={<Editar/>} />

        </Routes>
    )
}