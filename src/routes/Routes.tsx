import React  from 'react';
import { Route,Switch } from "react-router";
import { Error } from "./Error";
import { BrowserRouter as Router} from 'react-router-dom';


export function Routes(){
    let isLoggedIn=false

    if(isLoggedIn)
        return <h1>Welcome</h1>
    
    return <Router>
            <Switch>
                <Route exact path="/hello" render={()=>Error(401)}></Route>
                <Route path="*" render={()=>Error(404)}></Route>
            </Switch>
        </Router>
}
