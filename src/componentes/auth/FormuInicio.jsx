import React, { useState } from "react";
import { useEffect } from "react";
import { UseForm } from "../../hooks/HookFormuInicio";
import Captura from "../../assets/img/Captura.png"
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";




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
        <div class="div_form">
            
            <form onSubmit={handleSubmit} >
                <fieldset>
                    <img src={Captura} />
                    <div class="form-group" >
                        <input 
                            type="text" 
                            name="email" 
                            className="form-control"
                            placeholder="ejemplo@gmail.com"
                            autoComplete="off"
                            value={ correo }
                            onChange={handleInputChange}
                        />
                    </div>

                    <div class="form-group" >
                        <input 
                            type="password" 
                            name="password" 
                            className="form-control"
                            placeholder="**********"
                            autoComplete="off"
                            value={ contraseña}
                            onChange={handleInputChange}
                        />
                    </div> 
                    <label>¿Olvidó la contraseña?</label><br />

                    <button type="submit" className="btn" >
                        asda
                    </button>
                    
                </fieldset> 
                             
            </form>
            
            
        </div> 
    )
}

