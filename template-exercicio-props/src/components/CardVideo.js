import React from "react";
import { InfosUsuario } from "./InfoUsuario"

/* const titulo = "Título do vídeo"; */

export function reproduzVideo() {
  alert("O vídeo está sendo reproduzido");
}

export function CardVideo(props) {
  return (
    <div>
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src={props.id.imagem} alt=""/>
        <h4>{props.id.titulo}</h4>
        < InfosUsuario 
        jaskier = {props.id2}/>
      </div>
    </div>
  );
}
