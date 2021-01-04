//Dependencies
import React from 'react';
import { IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonIcon, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react';
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
                                    <IonIcon slot="icon-only" icon={personCircle} />
                                </IonButton>
                                <IonButton>
                                    <IonIcon slot="icon-only" icon={search} />
                                </IonButton>
                            </IonButtons>
                            <IonButtons slot="primary">
                                <IonButton color="danger">
                                    <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
                                </IonButton>
                            </IonButtons>
                            <h1>Dark Toolbar</h1>

                        </IonToolbar>
                    </ion-header>

                    <ion-content class="ion-padding">
                        <h1>Main Content</h1>
                    </ion-content>

                    <ion-footer>
                        <ion-toolbar>
                            <ion-title>Footer</ion-title>
                        </ion-toolbar>
                    </ion-footer>
                </ion-app>


            </>

        );
    }
}