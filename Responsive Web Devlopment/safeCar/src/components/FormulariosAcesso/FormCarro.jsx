import React, {  useState } from "react";
import { DivBody, DivRegistro } from "../../style/styled";
import vermelho from "../../img/vermelh.jpg"
import Header from "../ComponentesEstaticos/Header";




export default function FormCarro() {

    const [veiculo, setVeiculo] = useState({
        nmVeiculo: "",
        tipo: "",
        cor: "",
        placa: "",
        modelo: "",
        dsVeiculo: "",
        tripulantes: 0
    })


    const handleChange = e => {
        setVeiculo({ ...veiculo, [e.target.name]: e.target.value })
        console.log(veiculo)
    }

    const handleSubmit  =  e => { 
        e.preventDefault()

        console.log(veiculo)
        sessionStorage.setItem("cadastro-veiculo", JSON.stringify(veiculo))
        window.location = "/usuario/cadastro-usuario"
        
    }   
   
    
    return (
        <div>

            <Header />
            <DivBody>
                <DivRegistro>
                    <p className="aviso"></p>
                    <div className="container">
                        <div className="form-image">
                            <img src={vermelho} alt="" />
                        </div>
                        <div className="form">
                            <form onSubmit={handleSubmit} >
                                <div className="title">

                                    <h1>Cadastro de Veículo</h1>
                                </div>
                                <div className="input-group">
                                    <div className="input-box">
                                        <label>Nome veiculo</label>
                                        <input type="text"
                                            name="nmVeiculo"
                                            placeholder="Digite o nome do seu veiculo"
                                            required
                                            onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>Tipo veiculo</label>
                                        <input type="text"
                                            name="tipo"
                                            placeholder="tipo de veiculo"
                                            required
                                            onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>Dados cor</label>
                                        <input type="text"
                                            name="cor"
                                            placeholder="Digite a cor do veiculo"
                                            required
                                            onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>quantidade de tripulantes</label>
                                        <label> 1 - 2 - 3 - 4 - 5</label>
                                        <input type="range" required name="tripulantes" id="" min="1" max="5" onChange={handleChange} />

                                    </div>
                                    <div className="input-box">
                                        <label>Placa Veículo</label>
                                        <input type="text"
                                            name="placa"
                                            placeholder="Digite a placa do veículo"
                                            required
                                            onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>Modelo</label>
                                        <input type="text"
                                            name="modelo"
                                            placeholder="Modelo do Veículo"
                                            required
                                            onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>Descricao</label>
                                        <textarea name="dsVeiculo" required id="" cols="30" rows="10" onChange={handleChange}></textarea>
                                    </div>
                                </div>
                                <button>Enviar formulário</button>
                            </form>
                        </div>
                    </div>
                </DivRegistro>
            </DivBody>




        </div>
    )
}
