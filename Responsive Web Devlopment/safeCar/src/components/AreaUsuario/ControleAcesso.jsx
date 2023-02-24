import React, { useEffect, useState } from "react";
import { DivControle, DivPlanilha, DivInfoPessoal } from "../../style/styled";
import MenuLateral from "../ComponentesEstaticos/MenuLateral";
import {FaEdit, FaTrashAlt} from 'react-icons/fa'
import { Link } from "react-router-dom";


export default function ControleAcesso() {
    const usuario = JSON.parse(sessionStorage.getItem("usuario-validado")) 

    useEffect(()=> {
        if (usuario == null) {
            alert("Você precisa estar logado para acessar!")
            window.location = "/usuario/login"
        }

    }, [])



    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/SafeCarApp/rest/usuario").then((resp) => {
            return resp.json();

        }).then((resp) => {
            setUsuarios(resp)
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const handleDelete = (id) =>{
        fetch(`http://localhost:8080/SafeCarApp/rest/usuario/${id}`, {
            method: "delete"
        }).then(()=> {
            console.log("excluido")
            window.location = "/controle-acesso"
        }).catch((error)=> {
            console.log(error)
        })
    }

    return (
        <DivInfoPessoal>
            <div className="subMenu">
                <MenuLateral />
            </div>

            <DivControle>
                <div className="container">
                    <div className="title">
                        <h1>Gestão de Usuarios</h1>
                    </div>

                    <DivPlanilha>

                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Profissão</th>
                                    <th>Genero</th>
                                    <th>Salário</th>
                                    <th>Tipo Sanguineo</th>
                                    <th>Login</th>
                                    <th>Idade</th>
                                    <th>Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map((usuario) => ([
                                    <tr key={usuario.id}>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.profissao}</td>
                                        <td>{usuario.genero}</td>
                                        <td>{usuario.salario}</td>
                                        <td>{usuario.tpSanguineo}</td>
                                        <td>{usuario.login}</td>
                                        <td>{usuario.idade}</td>
                                        <td className="editar"><Link to= {`/editar-usuario/${usuario.id}`}><FaEdit/></Link>
                                        <a onClick={handleDelete.bind(this, usuario.id)}><FaTrashAlt className="icone" /></a></td>
                                       
                                    </tr>

                                ]))}
                            </tbody>
                            <tfoot><td colSpan='8'>Lista de usuarios</td></tfoot>
                        </table>

                    </DivPlanilha>
                </div>
            </DivControle>
        </DivInfoPessoal>



















    )
}