import React, { useState } from "react";
import { DivBody, DivLogin } from "../../style/styled";
import maserattiLogin from "../../img/13902.jpg"
import Header from "../ComponentesEstaticos/Header";


export default function Login() {


    const [usuario, setUsuario] = useState({
        nome: "",
        login: "",
        senha: ""
    })

    const handleChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }
    const logar = async (e) => {
        e.preventDefault()

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario)
        }

        const response = await fetch(
            "http://localhost:8080/SafeCarApp/rest/usuario/login/",
            requestOptions
        );

        const data = await response.json();




        if (data) {
            sessionStorage.setItem("usuario-validado", JSON.stringify(data));
            window.location = "/area-usuario";
        } else {
            window.location("/usuario/login")
            console.log(data)
        }

    }

    return (
        <div>

            <Header />
            <DivBody>

                <DivLogin>
                    <div className="container">
                        <div className="form-image">
                            <img src={maserattiLogin} alt="" />
                        </div>
                        <div className="form">
                            <form onSubmit={logar}>
                                <div className="title">
                                    <h1>Login</h1>
                                </div>

                                <div className="input-group">

                                    <div className="input-box">
                                        <label>Login usuario</label>
                                        <input type="text"
                                            name="login"
                                            placeholder="Digite seu email / login"
                                            onChange={handleChange}
                                            required />
                                    </div>


                                    <div className="input-box">
                                        <label>Senha</label>
                                        <input type="text"
                                            name="senha"
                                            placeholder="Digite sua senha"
                                            onChange={handleChange}
                                            required />
                                    </div>
                                </div>
                                <button>Logar</button>
                            </form>

                        </div>
                    </div>
                </DivLogin>
            </DivBody>
        </div>
    )
}