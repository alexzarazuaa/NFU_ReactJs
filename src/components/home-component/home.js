// this component for home page
import React, { Component } from 'react';
import { IonPage } from "@ionic/react";

import './home.css'
import Navbar from '../navbar-component/navbar'
import Footer from '../footer-component/footer'

class Home extends React.Component {
    render() {
        return (
            <IonPage>
                <ion-header>
                    <Navbar />
                    <div class="banner">
                        <div class="container">
                            <h2 class="logo-font">NOS FALTA UNO </h2>
                            <p>Inicia tu Mejor  <i>PACHANGA</i> </p>
                        </div>
                    </div>
                </ion-header>




                <Footer />

            </IonPage>

        );
    }
}
export default Home;