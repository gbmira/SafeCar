import React, { useEffect, useState } from "react";
import { DivAreaUsuario } from "../../style/styled";
import zerati from "../../img/zerati.png"

import MenuLateral from "../ComponentesEstaticos/MenuLateral";


export default function AreaUser() {

    const verificar = sessionStorage.getItem("usuario-validado")
    const [usuario, setUsuario] = useState([])

    
    useEffect(()=> {
        if (verificar == null) {
            window.location = "usuario/login"
        } else {
             setUsuario(JSON.parse(sessionStorage.getItem("usuario-validado"))) 
        }
    }, [])
    
 

    return (
        <DivAreaUsuario>

            <div className="subMenu">
                <MenuLateral />
            </div>
            <div className="center">

                <div className="secao-principal">
                    <h1>Olá <span>{usuario.nome}</span>, seja bem vindo a área do usuario!!</h1>
                    <div className="infos">

                        <p>- Você pode conhecer nossa solução acessando o menu lateral da area do usuario!</p>
                        <p>- É possível visualizar suas informações de cadastro acessando às "Informações Pessoais"!</p>
                        <p>- Os administradores tem acesso à todos os usuarios cadastrados!</p>
                        <p>- Veja os planos de saude disponíveis!</p>
                        <iframe width="960" height="515" src="https://www.youtube.com/embed/rurSbPb0ZD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>

                </div>
            </div>
            <div className="imagem">
                <img src={zerati} alt="" />
            </div>
        </DivAreaUsuario>

    )
}