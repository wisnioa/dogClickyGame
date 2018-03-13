import React from "react";
import "../../dogs.json";
import "./DogCard.css";

const DogCard = props => (

<div 


className= "card"
value= {props.id}  
onClick= { () => props.handleClick(props.id)}>

  
  <img className="card-img-top" style={{width:"250px", height:"250px" }} src={props.image} alt={props.name}/>


</div>

);


export default DogCard;

