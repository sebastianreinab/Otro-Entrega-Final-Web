import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { Algo } from "../componentes/Algo";
import { FormuInicio } from "../componentes/auth/FormuInicio";

/*
export const AppRouter = ()=> {
    return(
        
        <>
            <Routes> 
                <Route path="auth" element={ <FormuInicio /> } />
                <Route exact path="/" element={ <Algo /> } />                                                                    
            </Routes>

            <Navigate to="/auth/login"  />
             
        </>
        
    )
}*/