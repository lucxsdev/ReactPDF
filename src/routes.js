import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from "./components/Home";
import Rel1 from "./components/Rel1";
import Rel2 from "./components/Rel2";


export default function Routes(){   
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/rel-1' component={Rel1} />
                <Route path='/rel-2' component={Rel2} />
            </Switch>
        </BrowserRouter>
    )
};