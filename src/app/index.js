import React from "react";
import {render} from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

import User from "./components/User"
import Home from "./components/Home"

class App extends React.Component {
    render(){
        return(
            <Router>
                <div>
                    <Route path="/user" component={User}/>
                    <Route path="/home" component={Home}/>
                </div>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"));


// <Router history={browserHistory}>
//                 <Route path={"/"} component={Root} >
//                     <IndexRoute component={Home} />
//                     <Route path={"user/:id"} component={User} />
//                     <Route path={"home"} component={Home} />
//                 </Route>
//                 <Route path={"home-single"} component={Home}/>
//             </Router>