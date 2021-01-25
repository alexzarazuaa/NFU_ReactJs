// this component for home page
import React from 'react';
import { IonHeader, IonPage, IonTitle } from "@ionic/react";

import './home.css'
import Navbar from '../navbar-component/Navbar'
import Footer from '../footer-component/Footer'

const Home: React.FC = () => {

        return (
            <IonPage>
                <IonHeader>
                    <Navbar />
                    <IonTitle class="title_home">NOS FALTA UNO </IonTitle>
                    <IonTitle class="title_sub">Inicia tu Mejor  <i>PACHANGA</i> </IonTitle>
                  
                </IonHeader>


                <Footer />

            </IonPage>

        );
    
}
export default Home;