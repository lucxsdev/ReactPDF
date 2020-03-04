import React from 'react';
import '../../App.css';

import { Container, Img } from './styles';
import logo from './logo.png';

export default function NavBar(){


    return(
        <>
            <Container>
                <Img src={logo} alt="Lotus"/>
            </Container>
        </>
    )
} 