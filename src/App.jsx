import React from "react";
import { Header } from "./Components/Header/Header";
import { Lending } from "./Components/Lending/lending";
import { Route, Routes } from "react-router-dom";
import { ContainerRegister } from "./Components/Register/ContainerRegister";
import { ContainerAutorithation } from "./Components/Autorithation/ContainerAutorithation";
import { ContainerStenografy } from "./Components/Stenografy/ContainerStenografy";
import { ContainerDecript } from "./Components/Decript/ContainerDecript";
import { ContainerCrupto } from "./Components/Crupto/ContainerCrupto";

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Lending />} />
                    <Route path="/reg" element={<ContainerRegister />} />
                    <Route path="/login" element={<ContainerAutorithation />} />
                    <Route path="/stenografy" element={<ContainerStenografy />} />
                    <Route path="/crupto" element={<ContainerCrupto />} />
                    <Route path="/decrupt" element={<ContainerDecript />} />
                </Routes>
            </main>
        </>
    );
}

export {App};
