import React from "react";
import { Header } from "./Components/Header/Header";
import { Lending } from "./Components/Lending/lending";


const App = () => {
    return (
        <>
            <Header/>
            <main>
               <Lending/> 
            </main>
        </>
    );
}

export {App};
