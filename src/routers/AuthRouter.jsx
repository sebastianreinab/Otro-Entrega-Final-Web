import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { FormuInicio } from "../componentes/auth/FormuInicio";
import { FormuRegis } from "../componentes/auth/FormuRegis";

export const AuthRouter = ()=> {
    return(
        
            <>
                <Routes>
                    <Route 
                        exact
                        path="/auth/login"
                        element={ FormuInicio }
                    />

                    <Route 
                        exact
                        path="/auth/register"
                        element={ FormuRegis }
                    />
                </Routes>

                <Navigate to="/auth/login" />
                
            </>
        
    )
}