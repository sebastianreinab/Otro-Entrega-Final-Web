import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { Algo } from "../componentes/Algo";

export const AppRouter = ()=> {
    return(
        
        <>
            <Routes> 
                <Route path="auth" element={ AuthRouter  } />

                <Route
                    exact
                    path="/"
                    element={ Algo }    
                />                     
                                               
            </Routes>

            <Navigate to="/auth/login"  />
             
        </>
        
    )
}