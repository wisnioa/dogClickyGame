import React from "react";
import dogs from "./dogs.json";

const DogCard = props => (

<div className="card" value= {props.id} style="width: 20rem;" onClick= { () => props.handleClick(props.id)}
>
  
  <img className="card-img-top" src={props.image} alt={props.name}/>

</div>

);


export default DogCard;

