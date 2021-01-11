import React, { Component } from 'react';
import Navbar from '../navbar-component/navbar'
import Footer from '../footer-component/footer'
import './profile.css'
import {
    IonPage,IonLabel,IonButton,IonIcon
} from '@ionic/react';
import { arrowBackCircleSharp } from 'ionicons/icons';


class Profile extends Component {
    render() {
        return (
            <>
                <IonPage>

                    <Navbar />
                    <ion-content>

                        <div class="vertical-padding">

                            <ion-grid fixed>
                                <ion-row>
                                    <ion-col size="4" class="ion-no-padding position-relative">
                                        <ion-button fill="clear" class="button-vertical-align button-left">
                                            <ion-icon slot="icon-only" name="chatbubbles"></ion-icon>
                                        </ion-button>
                                    </ion-col>
                                    <ion-col size="4">
                                        <img src="https://image.flaticon.com/icons/svg/163/163801.svg" alt="" class="image-round border-tertiary margin-top" />
                                    </ion-col>
                                    <ion-col size="4" class="ion-no-padding position-relative">
                                        <ion-button fill="clear" class="button-vertical-align button-right">
                                            <ion-icon slot="icon-only" name="call"></ion-icon>
                                        </ion-button>
                                    </ion-col>
                                </ion-row>
                            </ion-grid>

                            <div class="ion-text-center">
                                <h4>Juanito Perez</h4>
                            </div>
                            <div class="ion-text-center">
                                <span class="text-muted ion-no-margin text-job">El de las tortas.</span>

                            </div>

                        </div>
                        <br></br>


                        <ion-grid fixed class="border-bottom border-top">
                            <ion-row class="ion-no-padding">

                                <ion-col size="4">
                                    <div class="ion-text-center">
                                        <span class="text-statics-big text-primary">1.5</span> <br></br>
                                        <small>Post</small>
                                    </div>
                                </ion-col>

                                <ion-col size="4">
                                    <div class="ion-text-center">
                                        <span class="text-statics-big text-primary">10.5</span> <br></br>
                                        <small>Followers</small>
                                    </div>
                                </ion-col>
                                <ion-col size="4">
                                    <div class="ion-text-center">
                                        <span class="text-statics-big text-primary">1.3</span> <br></br>
                                        <small>Following</small>
                                    </div>
                                </ion-col>
                            </ion-row>
                        </ion-grid>

                        <div class="vertical-padding">
                            <p class="ion-text-center text-profile">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus veritatis ut distinctio
                        </p>
                        </div>




                        <ion-fab  color="black" vertical="bottom" horizontal="end" slot="fixed">
                            
                            <IonButton href="/home">
                                <IonIcon icon={arrowBackCircleSharp} />
                                <IonLabel>Home</IonLabel>
                            </IonButton>
                        </ion-fab>

                    </ion-content>

                    <Footer />

                </IonPage>

            </>



        );
    }
}
export default Profile;

