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
                    <ion-title class="title_home">NOS FALTA UNO </ion-title>
                    <ion-title class="title_sub">Inicia tu Mejor  <i>PACHANGA</i> </ion-title>
                  
                </ion-header>


                <Footer />

            </IonPage>

        );
    }
}
export default Home;