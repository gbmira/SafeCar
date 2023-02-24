import React from "react";
import machinel from "../../img/machinel.jpg"
import seguranca from "../../img/seguranca.webp"
import banner3 from "../../img/eficiencas.jpg"


import { DivCard, DivCards } from "../../style/styled";


export default function Cards() {
    return (
        <DivCard>

        <div className="card">
            <DivCards>

                <div className="cards">
                    <div>

                        <h1>Segurança</h1>
                        <p>Deixe que nosso sistema monitore sua viagem, indicando o tempo ideal de dirigir e identificando sinais sonolentos no piloto! Nosso serviço oferece para o piloto e os passageiros mais segurança em realizar suas viagens! Viaje com sua família e amigos sem se preocupar!</p>
                    </div>
                    <img src={seguranca} alt="" />
                </div>


            </DivCards>
            <DivCards>
                <div className="cards">
                    <div>
                        <h1>Conforto</h1>
                        <p>Viaje com conforto com sua família e amigos, sem estresse e preocupações! O sistema monitora sua viagem fornecendo estatísticas coesas, agregando na sua experiência realizando o passeio!</p>
                    </div>
                    <img src={banner3} alt="" />
                </div>
            </DivCards>
            <DivCards>
                <div className="cards">
                    <div>
                        <h1>Tecnologia</h1>
                        <p>Nossa I.A monitora com seus sensores de movimentos e mapeamento muscular todos os movimentos, tempo de viagem, indicando os melhores momentos para descansar e recarregar suas energias, trazendo muito mais segurança em suas viagens! </p>
                    </div>
                    <img src={machinel} alt="" />
                </div>
            </DivCards>
        </div>

        </DivCard>

    )
}