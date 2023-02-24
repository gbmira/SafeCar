import React, {  useState } from "react";
import mc20  from "../../img/mc20.jpg" 
import { DivBody, DivUser } from "../../style/styled";
import Header from "../ComponentesEstaticos/Header";


export default function Cadastro() {
    
    const objCarro = JSON.parse(sessionStorage.getItem("cadastro-veiculo")) 

    const [user, setUser] = useState({
        nome: "",
        profissao: "",
        raca: "",
        genero: "",
        nacionalidade: "",
        tpSanguineo: "",
        login: "",
        senha: "",
        idade:0,
        salario:0,
    })
    




    let metodo = "post"


    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }




    const [dadosUser, setDadosUser] = useState({
        nmVeiculo: objCarro.nmVeiculo,
        tipo: objCarro.tipo,
        cor: objCarro.cor,
        placa: objCarro.placa,
        modelo: objCarro.modelo,
        dsVeiculo: objCarro.dsVeiculo,
        tripulantes: objCarro.tripulantes,

        user: {     
            nome: "",
            profissao: "",
            raca:"",
            genero:"" ,
            nacionalidade:"" ,
            tpSanguineo: "",
            login: "",
            senha: "",
            idade: "",
            salario: 0 
        }
    })

    const handleSubmit = e => {
        e.preventDefault()
        dadosUser.user.nome = user.nome
        dadosUser.user.profissao = user.profissao
        dadosUser.user.raca = user.raca
        dadosUser.user.genero = user.genero
        dadosUser.user.nacionalidade = user.nacionalidade
        dadosUser.user.tpSanguineo = user.tpSanguineo
        dadosUser.user.login = user.login
        dadosUser.user.senha = user.senha
        dadosUser.user.idade = user.idade
        dadosUser.user.salario = user.salario

        
        
        
        fetch(`http://localhost:8080/SafeCarApp/rest/veiculo/cadastro-veiculo/`, {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosUser)
        }).then((error)=> {
            console.log(error)




        }).then(()=> {
            window.location = "/usuario/login"
        })
            
    }
    


    /* useEffect((async) => {
        fetch(`http://localhost:8080/SafeCarApp/rest/veiculo/listar/${objCarro.placa}`).then((resp) => {
            return resp.json();
        }).then((resp) => {
            setVeiculo(resp)
            console.log(veiculo)

        })
    }, []) */

    /*
        const handleSubmit = e => {
            e.preventDefault()
            
            fetch(`http://localhost:8080/SafeCarApp/rest/usuario`, {
                method: metodo,
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario)
            }).then(()=> {
                console.log(usuario)
                sessionStorage.setItem("dados-usuario", JSON.stringify(usuario))
                window.location = "/area-usuario"
            })
        }*/


    return (
        <div>

            <Header />
            <DivBody>


                <DivUser>
                    <div className="container">
                        <div className="form-image">
                            <img src={mc20} alt="" />
                        </div>
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <div className="title">

                                    <h1 className="titlee">Cadastre-se</h1>
                                </div>
                                <div className="input-group">
                                    <div className="input-box">
                                        <label>Nome Completo</label>
                                        <input type="text"
                                            name= "nome"
                                            placeholder="Digite seu nome"
                                            required
                                            onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>Login</label>
                                        <input type="text"
                                            name= "login"
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
                                            <input type="radio" name="genero" value="M" id="sexo-m"   required onChange={handleChange} />
                                            <label form="sexo-m">Masculino</label>
                                        </div>
                                        <div className="gender-input">
                                            <input type="radio" name="genero" id="sexo-f" value="F"  required onChange={handleChange} />
                                            <label form="sexo-f">Feminino</label>
                                        </div>
                                        <div className="gender-input">
                                            <input type="radio" name="genero" id="sexo-any" value="I" required onChange={handleChange} />
                                            <label form="sexo-f">Prefiro não informar</label>
                                        </div>
                                    </div>
                                    <div className="input-box">
                                        <label>Nacionalidade</label>
                                        <input type="nacionalidade" name='nacionalidade'  placeholder="Digite sua nacionalidade" required onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>Tipo sanguineo</label>
                                        <select name="tpSanguineo" id="tpSanguineo"   required onChange={handleChange}>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
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
                                <button>Enviar Cadastro</button>
                            </form>
                        </div>
                    </div>
                </DivUser>
            </DivBody>
        </div>
    )
}