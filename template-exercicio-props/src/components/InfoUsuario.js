import React from "react";

export function InfosUsuario (props) {
    return (
        <div>
            <img src={props.jaskier.logo} width="100px"/>
            <p>{props.jaskier.autor}</p>
        </div>
    )
}