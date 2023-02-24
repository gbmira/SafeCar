import React from "react";
import banner from "../../img/banner1copy.jpg"
import banner1 from "../../img/banner1.webp"
import banner2 from "../../img/interior.jpg"


import { DivBanner, DivMain } from "../../style/styled";
import Cards from "./Cards";
import Proposta from "./Proposta";
import Solution from "./Solution";
import AreaUser from "../AreaUsuario/AreaUser";
import Header from "../ComponentesEstaticos/Header";

export default function Home() {



    return (
        <div>
            <Header />

            <DivMain>
                <DivBanner>
                    <div className="banner">
                        <img src={banner2} alt="" />
                        <div className="texto">


                        </div>
                    </div>
                </DivBanner>
                <Solution />
                <Proposta />
                <Cards />
            </DivMain>
        </div>

    )
}