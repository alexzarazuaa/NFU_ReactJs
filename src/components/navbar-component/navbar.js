import React, { Component } from 'react';
import { IonToolbar, IonButtons,  IonButton, IonIcon ,IonLabel} from '@ionic/react';
import { person } from 'ionicons/icons';
import './navbar.css';

class Navbar extends Component {
    render() {
        return (

            <IonToolbar color="dark">

                <IonButtons slot="secondary">

                    <IonButton>
                        <ion-searchbar show-cancel-button="focus"></ion-searchbar>
                    </IonButton>
                    <IonButton  href="/profile">
                        <IonIcon icon={person} />
                        <IonLabel>User</IonLabel>

          
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

