import React from "react";




const Nav = props  => (

<nav className="navbar navbar-light">
<span className="navbar-brand">Dog Clicky Game</span>


<span className="navbar-text">Score: {props.score} </span>
</nav>



);


export default Nav;