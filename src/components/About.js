import React, { Component } from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">ABOUT</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla dolor felis, quis elementum est ultricies at. Aliquam faucibus non tellus eget efficitur.</p>
        </div>
    )
}

export default Rainbow(About);

// High order component solo es pasarle un componente a al High order component y este tendra su propia logica,
// despues ese mismo componente que le pasaste te lo devolvera con añadidos extras a traves de props.