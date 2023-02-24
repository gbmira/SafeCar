import React from "react";
import {  DivMenuLateral } from "../../style/styled";
import { Link } from "react-router-dom";


export default function MenuLateral() {

    

    return(
        <DivMenuLateral>
        <div className="subMenu">
          
        <ul>
            <div className="title">
                <h1>Menu</h1>
            </div>
            <li><Link to="/area-usuario" >Area Usuario</Link></li>
            <li><Link to="/software" >Aplicação do Software</Link></li>
            <li><Link to="/info-pessoal" >Informacoes Pessoais</Link></li>
            <li><Link to="/controle-acesso" >Controle de acesso</Link></li>
            <li><Link to="/plano-saude" >Planos de Saude</Link></li>
            <li><Link to="/" >Voltar</Link></li>
        </ul>
        </div>
        </DivMenuLateral>
    ) 
}