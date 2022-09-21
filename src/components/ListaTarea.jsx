import React from "react";
// import  ListGroup  from "react-bootstrap/ListGroup";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({arregloTareas, borrarTarea}) => {
  return (
    <ListGroup>
      {
        arregloTareas.map((tarea, posicion)=> <ItemTarea key={posicion} nombreTarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
      }
     
    </ListGroup>
  );
};

export default ListaTarea;
