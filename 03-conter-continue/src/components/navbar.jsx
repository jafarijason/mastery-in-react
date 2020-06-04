import React, { Component } from 'react';

//Stateless Functioanl Componnents
const NavBar = ({totaalCounters}) => {
    console.log('Navbar- renderd')
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar {"  "}
                <span className="badge badge-pill badge-secondary">
                    {totaalCounters}</span>
            </a>
        </nav>
    );
}



export default NavBar;