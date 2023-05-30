import React from "react";
import bobEs from "../assets/img/bobEs.jpg"

export const Imagenes = ({tamañoPin})=> {

    return(
        <>
            <div className={`pin ${tamañoPin}`}>
                <img className="pin1" src={bobEs} alt=""/>
            </div>
            
        </>
    )

            //<div className={`pin ${tamañoPin}`}>
            //    <img src={imgs.imagen} alt={imgs.title} />
            //</div>
    
}