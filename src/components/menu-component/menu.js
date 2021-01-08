import React, { Component } from 'react';
import Navbar from '../navbar-component/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../pages/home';
import About from '../../pages/about';
import Contact from '../../pages/contact';
import Footer from '../footer-component/footer'
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
                       <Footer />
                    </ion-footer>

                </ion-app>
            </>
        );
    }
}
export default Menu;