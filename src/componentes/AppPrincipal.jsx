import React from "react";
import { AppRouter } from "../routers/AppRouter";
import { Routes,Route, Navigate, Link } from "react-router-dom";
import { FormuInicio } from "./auth/FormuInicio";
import { App } from "../App";


export const AppPrincipal =()=> {

    return(
        <>
        <h1>Algo</h1>

        <Link to="/principal" />
        
        <Routes>
            <Route path="/formulario" elemnet={<FormuInicio />}/>
            <Route path="/principal" element={<App />} />
            <Route path="/*" element={<FormuInicio />}/>
        </Routes>
        
        </>
    )
}