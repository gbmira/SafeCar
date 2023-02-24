import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DivBody, DivUser } from "../../style/styled";
import Header from "../ComponentesEstaticos/Header";
import hibrid from "../../img/hibrida.jpg"


export default function Editar() {

    const usuario = JSON.parse(sessionStorage.getItem("usuario-validado")) 
    
    

    useEffect(()=> {
        if (usuario == null) {
            alert("Você precisa estar logado para acessar!")
            window.location = "/usuario/login"
        }

    }, [])

    let { id } = useParams()

    const [novo, setNovo] = useState({
        nome: "",
        profissao: "",
        raca: "",
        genero: "",
        nacionalidade: "",
        tpSanguineo: "",
        login: "",
        senha: "",
        idade: 0,
        salario: 0,
    })
    let metodo = "put"


    const handleChange = e => {
        setNovo({ ...novo, [e.target.name]: e.target.value })
        console.log(novo)
    }


    const handleSubmit = e => {
        e.preventDefault()
        fetch(`http://localhost:8080/SafeCarApp/rest/usuario/${id}`, {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo)
        }).then(() => {
            window.location = "/"
        })


    }

    useEffect(() => {

        fetch(`http://localhost:8080/SafeCarApp/rest/usuario/${id}`)
            .then((resp) => {
                return (resp.json())
            }).then(data => {
                setNovo(data)
            }).then((error) => {
                console.log(error)
            })

    }, [id])
    return (
        <div>
            <Header />
            <DivBody>
                <DivUser>
                    <div className="container">
                        <div className="form-image">
                            <img src={hibrid} alt="" />
                        </div>
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <div className="title">

                                    <h1>Editar usuario</h1>
                                </div>
                                <div className="input-group">
                                    <div className="input-box">
                                        <label>Nome Completo</label>
                                        <input type="text"
                                            name="nome"
                                            placeholder="Digite seu nome"
                                            required
                                            onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>Login</label>
                                        <input type="text"
                                            name="login"
                                            placeholder="Digite seu Login"
                                            required
                                            onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>Senha</label>
                                        <input type="password"
                                            name="senha"
                                            placeholder="Digite sua Senha"
                                            required
                                            onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>Profissão</label>
                                        <input type="text"
                                            name="profissao"
                                            placeholder="Digite sua profissao"
                                            required
                                            onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>Idade</label>
                                        <input type="text"
                                            name="idade"
                                            placeholder="Digite sua idade"
                                            required
                                            onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>Salario</label>
                                        <input type="text"
                                            name="salario"
                                            placeholder="Digite seu salario"
                                            required
                                            onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>Genero</label>
                                        <div className="gender-input">
                                            <input type="radio" name="genero" id="sexo-m" value="M" required onChange={handleChange} />
                                            <label form="sexo-m">Masculino</label>
                                        </div>
                                        <div className="gender-input">
                                            <input type="radio" name="genero" id="sexo-f" value="F" required onChange={handleChange} />
                                            <label form="sexo-f">Feminino</label>
                                        </div>
                                        <div className="gender-input">
                                            <input type="radio" name="genero" id="sexo-any" value="I" required onChange={handleChange} />
                                            <label form="sexo-f">Prefiro não informar</label>
                                        </div>
                                    </div>
                                    <div className="input-box">
                                        <label>Nacionalidade</label>
                                        <input type="nacionalidade" name='nacionalidade' placeholder="Digite sua nacionalidade" required onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>Tipo sanguineo</label>
                                        <select name="tpSanguineo" id="tpSanguineo" required onChange={handleChange}>
                                            <option value="a+">A+</option>
                                            <option value="a-">A-</option>
                                            <option value="b+">B+</option>
                                            <option value="b-">B-</option>
                                            <option value="ab+">AB+</option>
                                            <option value="ab-">AB-</option>
                                            <option value="o+">O+</option>
                                            <option value="o-">O-</option>
                                        </select>
                                        <div className="input-box">
                                            <label>raça</label>
                                            <select name="raca" id="raca" required onChange={handleChange}>
                                                <option value="Branca">Branca</option>
                                                <option value="Parda">Parda</option>
                                                <option value="Negra">Negra</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                                <button>Atualizar</button>
                            </form>
                        </div>
                    </div>
                </DivUser>
            </DivBody>
        </div>
    )







}