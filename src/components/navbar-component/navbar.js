import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IonToolbar, IonAvatar, IonTitle, IonButtons, IonBackButton, IonButton, IonIcon, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import './navbar.css';

class Navbar extends Component {
    render() {
        return (

            <IonToolbar color="dark">

                <IonButtons slot="secondary">

                    <IonButton>
                        <ion-searchbar show-cancel-button="focus"></ion-searchbar>
                    </IonButton>
                    <IonButton>
                        <IonAvatar>
                            <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
                        </IonAvatar>
                    </IonButton>
                </IonButtons>

                <IonButtons slot="primary">
                    <IonButton color="danger">
                        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
                    </IonButton>
                </IonButtons>

                <ion-nav className="navBar">

                    
                    <IonButton color="dark" href="/signin">Sign In</IonButton>
                    <IonButton color="dark" href="/signup">Sign Up</IonButton>


                </ion-nav>

            </IonToolbar>

        );
    }
}
export default Navbar;

