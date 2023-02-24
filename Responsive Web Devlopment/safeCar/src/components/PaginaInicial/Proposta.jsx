import React from "react";
import { DivProposta } from "../../style/styled";
import maserati from "../../img/maserati.png"
import ia from "../../img/ia.png"

export default function Proposta() {
    return (
        <div>

            <DivProposta>
                <div className="text">
                    <h1>Proposta de invervenção SafeCar</h1>
                    <p>A SafeCar juntamente em parceria com a Stellantis desenvolveu uma solução inovadora intervindo na problemática!
                        Introduzimos um sistema de Inteligência Artificial que identifica se o piloto está “cochilando” ao volante, fazendo assim, uma serie de avisos para que o mesmo pare o carro e acorde, e dependendo da situação serão acionadas ligações telefônicas para agentes superiores como policia, pronto socorro para intervirem antes de um</p>
                </div>
                <img src={maserati} alt="" />
            </DivProposta>
            <DivProposta>
                <div className="text">
                    <h1>Machine Learning / Inteligencia artificial</h1>
                    <p>Nosso sistema por meio de uma câmera acoplada no painel mapeia todas as expressões faciais do piloto, tendo assim tudo supervisionado pela máquina, e caso o piloto realize movimentos / expressões sonolentas, será identificado e os avisos serão disparados.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod cumque deleniti fugit non, consequatur est tempora consectetur aspernatur inventore ullam eius sed eaque perspiciatis voluptate quia illo, culpa dolorem.</p>
                </div>
                <img src={ia} alt="" />
            </DivProposta>

        </div>
    )
}