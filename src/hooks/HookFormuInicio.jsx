import React, { useState } from "react";

export const UseForm =(initialState = {})=> {

    const [formState, setFormState]= useState({
        correo: '',
        contraseña: ''
    })

    const { correo, contraseña} = formState;

    const handleInputChange =({target})=> {

        setFormState({
            ...formState,
            [target.name]: target.value
        });

    }

    return [formState, handleInputChange];
}