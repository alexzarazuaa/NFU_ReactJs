import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonPage } from "@ionic/react";
import React from "react";
import Footer from '../footer-component/Footer'
import Navbar from '../navbar-component/Navbar'
import './modalities.css'



const Modalities: React.FC = () => {
  
        return (
            <IonPage class="modalities">
                <Navbar/>

                {/* INDOOR FOOTBALL CARD */}
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>SportCenter</IonCardSubtitle>
                        <IonCardTitle>Indoor football</IonCardTitle>
                    </IonCardHeader>

                    <IonItem>
                        <IonItem slot="start"></IonItem>
                        <IonLabel>
                            Available fields</IonLabel>
                        <IonButton href="/indoorfootball" fill="outline" slot="end">View</IonButton>
                    </IonItem>

                    <IonCardContent>
                        This is content, without any paragraph or header tags,
                        within an IonConCaIonCardContent element.
                      </IonCardContent>
                </IonCard>
                
                {/*  FOOTBALL 7 CARD */}

                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>SportCenter</IonCardSubtitle>
                        <IonCardTitle>Football 7</IonCardTitle>
                    </IonCardHeader>

                    <IonItem>
                        <IonItem slot="start"></IonItem>
                        <IonLabel>
                            Available fields</IonLabel>
                        <IonButton fill="outline" href="/football-7" slot="end">View</IonButton>
                    </IonItem>

                    <IonCardContent>
                        This is content, without any paragraph or header tags,
                        within an IonConCaIonCardContent element.
                      </IonCardContent>
                </IonCard>

                {/*  FOOTBALL 11 CARD */}

                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>SportCenter</IonCardSubtitle>
                        <IonCardTitle>Football 11</IonCardTitle>
                    </IonCardHeader>

                    <IonItem>
                        <IonItem slot="start"></IonItem>
                        <IonLabel>
                            Available fields</IonLabel>
                        <IonButton href="/football-11" fill="outline" slot="end">View</IonButton>
                    </IonItem>

                    <IonCardContent>
                        This is content, without any paragraph or header tags,
                        within an IonConCaIonCardContent element.
                      </IonCardContent>
                </IonCard>





                    <Footer/>
            </IonPage >
        );
    
}

export default Modalities;