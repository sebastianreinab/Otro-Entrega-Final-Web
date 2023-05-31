import React, { useState } from "react";
import { useEffect } from "react";
import { UseForm } from "../../hooks/HookFormuInicio";
import Captura from "../../assets/img/Captura.png"
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import '../../inicio.css'
import google from '../../assets/img/google.png'
import { Routes,Route, Navigate} from "react-router-dom";
import { App } from "../../App";
import PinstaUAO from '../../assets/img/PinstaUAO.png'




export const FormuInicio =()=> {

    const [formValues, handleInputChange] = UseForm({
        correo: '',
        contraseña: ''
    })

    const { correo, contraseña} = formValues;

    useEffect(()=> {
        console.log('el correo cambio');
    }, [correo])

    const handleSubmit =(e)=>{       
        e.preventDefault();
        console.log(formValues)
    }


    return(
        <div className="div_form">
            
            <form method="post">
                <fieldset className="cssField">
                    <img src={PinstaUAO} className="pinstacss"/>
                    <div class="form-group" >
                        <label>Correo electronico</label><br/>
                        <input 
                            type="text" 
                            name="email" 
                            className="form-control"
                            placeholder="Correo"
                            autoComplete="off"
                            value={ correo }
                            onChange={handleInputChange}
                        /><br/>
                                    
                        <label>Contraseña</label><br/>
                        <input 
                            type="password" 
                            name="password" 
                            className="form-control"
                            placeholder="**********"
                            autoComplete="off"
                            value={ contraseña }
                            onChange={handleInputChange}
                        /><br/>

                        <label>¿Olvidó la contraseña?</label><br />

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" ><Link to="/principal" />
                            ingresar
                        </button><br/>
                        <button className="bot_google">
                            <img src={google} className="google"/>
                            Continuar con google
                        </button>
                    </div>        
                </fieldset> 
            </form>               
            
            
            
            
        </div> 
    )
}

