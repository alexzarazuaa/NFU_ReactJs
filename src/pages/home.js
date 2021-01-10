// this component for home page
import React, { Component } from 'react';
import '../theme/home.css'
class Home extends Component {
    render() {
        return (
            <>
                <ion-app>
                    <div class="banner">
                        <div class="container">
                            <br></br>
                            <br></br>
                            <br></br> 
                            <h2 class="logo-font">NOS FALTA UNO </h2>
                            <p>Inicia tu Mejor  <i>PACHANGA</i> </p>
                        </div>
                    </div>
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
export default Home;