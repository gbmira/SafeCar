import React, { useEffect } from "react";
import { DivInfoPessoal } from "../../style/styled";
import jeep from "../../img/jeep.png"
import MenuLateral from "../ComponentesEstaticos/MenuLateral";
import { useState } from "react";


export default function InfoPessoal() {

    const verificar = sessionStorage.getItem("usuario-validado")

    
    const[usuario, setUsuario] = useState([])
    
    
    
    useEffect(()=> {
        if (verificar == null) {
            alert("Você precisa estar logado para acessar!")
            window.location = "/usuario/login"
        } else {
            setUsuario(JSON.parse(sessionStorage.getItem("usuario-validado")) )
            
        }

    }, [])
    

    return(
        <DivInfoPessoal>
        <div className="subMenu">
        <MenuLateral/>     
        </div>
        <div className="center">

        <div className="secao-principal">
            <h1><span>{usuario.nome}</span>, nessa seção você pode visualizar e alterar seus dados pessoais!</h1>
            <div className="infos">
            <p>Nome do usuario: <span>{usuario.nome}</span></p>
            <p>Login:<span>{usuario.login}</span></p>
            <p>id do Veiculo: {usuario.placa}</p>
            <p>Idade: <span>{usuario.idade}</span></p>
            <p>Nacionalidade: <span>{usuario.nacionalidade}</span></p>
            <p>Tipo Sanguineo: <span>{usuario.tpSanguineo}</span></p>
            </div>

        </div>
        </div>
        <div className="imagem">
            <img src={jeep} alt="" />
        </div>
        </DivInfoPessoal>

    )
}