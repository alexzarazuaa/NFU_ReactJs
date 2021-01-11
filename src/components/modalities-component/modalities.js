import { IonPage } from "@ionic/react";
import React from "react";
import Footer from '../footer-component/footer'
import Navbar from '../navbar-component/navbar'
import './modalities.css'


class Modalities extends React.Component {
    render() {
        return (
            <IonPage class="modalities">
                <Navbar/>

                {/* INDOOR FOOTBALL CARD */}
                <ion-card>
                    <ion-card-header>
                        <ion-card-subtitle>SportCenter</ion-card-subtitle>
                        <ion-card-title>Indoor football</ion-card-title>
                    </ion-card-header>

                    <ion-item>
                        <ion-icon name="pin" slot="start"></ion-icon>
                        <ion-label>
                            Available fields</ion-label>
                        <ion-button href="/indoorfootball" fill="outline" slot="end">View</ion-button>
                    </ion-item>

                    <ion-card-content>
                        This is content, without any paragraph or header tags,
                        within an ion-card-content element.
                      </ion-card-content>
                </ion-card>
                
                {/*  FOOTBALL 7 CARD */}

                <ion-card>
                    <ion-card-header>
                        <ion-card-subtitle>SportCenter</ion-card-subtitle>
                        <ion-card-title>Football 7</ion-card-title>
                    </ion-card-header>

                    <ion-item>
                        <ion-icon name="pin" slot="start"></ion-icon>
                        <ion-label>
                            Available fields</ion-label>
                        <ion-button fill="outline" href="/football-7" slot="end">View</ion-button>
                    </ion-item>

                    <ion-card-content>
                        This is content, without any paragraph or header tags,
                        within an ion-card-content element.
                      </ion-card-content>
                </ion-card>

                {/*  FOOTBALL 11 CARD */}

                <ion-card>
                    <ion-card-header>
                        <ion-card-subtitle>SportCenter</ion-card-subtitle>
                        <ion-card-title>Football 11</ion-card-title>
                    </ion-card-header>

                    <ion-item>
                        <ion-icon name="pin" slot="start"></ion-icon>
                        <ion-label>
                            Available fields</ion-label>
                        <ion-button href="/football-11" fill="outline" slot="end">View</ion-button>
                    </ion-item>

                    <ion-card-content>
                        This is content, without any paragraph or header tags,
                        within an ion-card-content element.
                      </ion-card-content>
                </ion-card>





                    <Footer/>
            </IonPage >
        );
    }
}

export default Modalities;