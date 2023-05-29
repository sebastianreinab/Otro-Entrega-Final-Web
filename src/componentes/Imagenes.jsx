import React from "react";

export const Imagenes = ({imgs})=> {

    return(
        <>
            <div>
                <img src={imgs.imagen} alt={imgs.title} />
            </div>
        </>
    )
}