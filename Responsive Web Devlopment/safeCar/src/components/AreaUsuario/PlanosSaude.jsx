import React, { useEffect, useState } from "react";
import { DivPlano } from "../../style/styled";
import MenuLateral from "../ComponentesEstaticos/MenuLateral";


export default function PlanosSaude() {

    const usuario = JSON.parse(sessionStorage.getItem("usuario-validado")) 
    
    

    useEffect(()=> {
        if (usuario == null) {
            alert("Você precisa estar logado para acessar!")
            window.location = "/usuario/login"
        }

    }, [])



    const [planos, setPlano] = useState([])


    useEffect(() => {
        fetch("http://localhost:8080/SafeCarApp/rest/planos").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setPlano(resp)
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (

            <div className="container">
                <div className="subMenu">
                    <MenuLateral />
                </div>
        <DivPlano>
                <div className="titulo">
                    <h1>Planos de Saude que temos parcerias</h1>
                    <p>Confira a lista abaixo com todos os planos que cobrimos para resgate rápido!</p>
                </div>

                <div className="painel">
                    {planos.map((plano) => ([
                        <div className="planos">
                            <h1>Nome: {plano.nome}</h1>
                            <h1>Classificação: {plano.tipo}</h1>
                            <h1>Unidade: {plano.unidade}</h1>
                            <h1>Endereco: {plano.endereco}</h1>
                            <h1>Cidade: {plano.cidade}</h1>
                        </div>
                    ]))}



                </div>
        </DivPlano>
            </div>

    )
}