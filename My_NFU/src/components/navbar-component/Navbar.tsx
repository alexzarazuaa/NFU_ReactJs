import React, { Component } from 'react';
import { IonToolbar, IonButtons,  IonButton, IonIcon ,IonLabel, IonSearchbar, IonNav} from '@ionic/react';
import { person } from 'ionicons/icons';
import './navbar.css';

const Navbar: React.FC = () => {

        return (

            <IonToolbar color="dark">

                <IonButtons slot="secondary">

                    <IonButton>
                        <IonSearchbar show-cancel-button="focus"></IonSearchbar>
                    </IonButton>
                    <IonButton  href="/profile">
                        <IonIcon icon={person} />
                        <IonLabel>User</IonLabel>

          
                    </IonButton>
                </IonButtons>


                <IonNav className="navBar">


                    <IonButton color="dark" href="/login">Sign In</IonButton>
                    <IonButton color="dark" href="/register">Sign Up</IonButton>


                </IonNav>

            </IonToolbar>

        );
    
}
export default Navbar;

