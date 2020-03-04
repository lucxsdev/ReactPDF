import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Button} from './styles';

class Home extends Component{

    render(){
        return(
        <>
        <Container>

            <h3 className="h3">Selecione o tipo de relatório</h3>
            
            <Button>
                <Link to="/rel-1">Relatório 01</Link>
            </Button>
            <Button>
                <Link to="/rel-1">Relatório 01</Link>
            </Button>
            <Button>
                <Link to="/rel-1">Relatório 01</Link>
            </Button>
        
       </Container>
        </>
    )
    }
};


export default Home;

