import React from "react";
import { Routes,Route, Navigate, Link } from "react-router-dom";
import { FormuInicio } from "./auth/FormuInicio";
import { App } from "../App";


export const AppPrincipal =()=> {

    return(
        <>
        

        <Link to="/principal" >principal</Link>
        <Link to="/*" >Formulario inicio</Link>
        
        <Routes>
            <Route path="/formulario" elemnet={<FormuInicio />}/>
            <Route path="/principal" element={<App />} />
            <Route path="/*" element={<FormuInicio />}/>
        </Routes>
        
        </>
    )
}