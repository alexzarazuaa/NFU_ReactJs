import React, { Component } from 'react';
import Navbar from './navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import './menu.css';

class Menu extends Component {
    render() {
        return (
            <>
                <ion-app>

                    <BrowserRouter>
                        <div className="App">
                            <Navbar />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/about" component={About} />
                                <Route path="/contact" component={Contact} />
                                
                            </Switch>

                            
                        </div>
                    </BrowserRouter>



                    <ion-footer>
                        <ion-toolbar>
                            <ion-title class="footer">&copy; NFU 2021</ion-title>
                        </ion-toolbar>
                    </ion-footer>

                </ion-app>
            </>
        );
    }
}
export default Menu;