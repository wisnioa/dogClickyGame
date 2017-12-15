import React from "react";




const Nav = props  => (

<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
<span class="navbar-brand">Dog Clicky Game</span>
<span class="navbar-text">Total Score: {props.total-score}</span>

<span class="navbar-text">Score: {props.score} </span>
</nav>



);


export default Nav;