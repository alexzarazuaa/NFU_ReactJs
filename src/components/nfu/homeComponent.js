//Dependencies
import React from 'react';
import { IonToolbar,IonAvatar, IonTitle, IonButtons, IonBackButton, IonButton, IonIcon, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';


//Assets
import './homeComponent.css';

/**
 * Epg Class
 */

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //   events: Object.values(epgData.events).reverse(),
        //   name: epgData.name,
        //   title: epgData.title,
        // };


    }

    componentDidMount() {
        //Ja vorem
    }







    /**
     * The Render 
     */

    render() {




        return (
            <>
                <ion-app>
                    <ion-header>
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
                            <ion-title>Home</ion-title>
                    

                        </IonToolbar>
                    </ion-header>

                    <ion-content class="ion-padding">
                        <ion-title>Hey</ion-title>
                    </ion-content>

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