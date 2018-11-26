import React from 'react';
import {render} from "react-dom";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Body from './components/Body';

class App extends React.Component {
    render(){
        var header = {
            first: "Order Name",
            second: "Order Description",
            third: "Order price"
        }; 
        
        var firstOrder = {
            name: "Cheif",
            description: "Only salt",
            price: 20
        };

        var secondOrder = {
            name: "Middle",
            description: "Meat",
            price: 120
        };

        var thirdOrder = {
            name: "Expensive",
            description: "Potato with fish",
            price: 220
        };

        var orders = [];
        orders.push(firstOrder, secondOrder, thirdOrder);

        var iq = 100;

        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home iq={iq}/>
                    </div>
                </div>

                <Body header={header} products={orders}/>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
