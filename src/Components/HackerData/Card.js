import React from "react";
import './Card.css'


function Card(props) {
  return (
    <div className="CardContent">
      <p className="CardTitle">{props.title}</p>
      <p className="Description">{props.description}</p>
      <p className="time">{props.time}</p>
    </div>
  );
}

export default Card






 //Develop by Md. Omar Faruk Tutul