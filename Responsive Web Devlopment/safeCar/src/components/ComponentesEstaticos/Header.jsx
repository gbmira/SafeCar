import React from "react";
import { Link } from "react-router-dom";
import { DivHeader } from "../../style/styled";
import stellantis1 from "../../img/stellantis-255.png"
import logo1 from "../../img/logo1.png"



export default function Header() {
    const valida = sessionStorage.getItem("usuario-validado")

    const logout = ()=> {
        sessionStorage.removeItem("usuario-validado")
        window.location = "usuario/login"
    }
    

    return (
        <DivHeader>

            <div className="logo">
                <Link to="/"><img src={logo1} alt="" /></Link>
            </div>
                <img src={stellantis1} />


            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/" >Sobre</Link></li>
                <li><Link to="/" >Contato</Link></li>
                <li><Link to="/usuario/login" ><button style={valida ? {display: "none"}:  {display: "inline"} }>Login</button></Link></li>
                <li><Link to="/veiculo/cadastro-veiculo"><button style={valida ? {display: "none"}:  {display: "inline"} }>Cadastro</button></Link></li>
            
                <li><Link to="/area-usuario"><button style={valida ? {display: "inline", marginRight: '30px'}:{display: "none"}}>Área usuario</button></Link></li>
                <li><a><button style={valida ? {display: "inline", marginRight: '30px'}:{display: "none"} } onClick={logout}>Logout</button></a></li>
                
            </ul>
        </DivHeader>
    )
}