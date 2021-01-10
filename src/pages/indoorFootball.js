import { IonPage } from "@ionic/react";
import React from "react";
import '../theme/indoor.css'


class IndoorFootball extends React.Component {
    render() {
        return (
            <IonPage>


                {/* INDOOR FOOTBALL CARD */}
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>Indoor football</ion-card-title>
                        <h2>
                            Field 1
                        </h2>
                        <br></br>
                        <img class="img" src="https://solertorro.com/wp-content/uploads/2020/11/IMG_5826-b.jpg"></img>



                    </ion-card-header>

                    <ion-item>
                        <ion-icon name="pin" slot="start"></ion-icon>
                        <ion-label>
                            Available Times</ion-label>
                        <ion-button fill="outline" slot="end">View</ion-button>
                    </ion-item>


                </ion-card>

                {/* INDOOR FOOTBALL CARD */}
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>Indoor football</ion-card-title>
                        <h2>
                            Field 2
                        </h2>
                        <br></br>
                        <img class="img" src="https://solertorro.com/wp-content/uploads/2020/11/IMG_5826-b.jpg"></img>




                    </ion-card-header>

                    <ion-item>
                        <ion-icon name="pin" slot="start"></ion-icon>
                        <ion-label>
                            Available Times</ion-label>
                        <ion-button fill="outline" slot="end">View</ion-button>
                    </ion-item>


                </ion-card>

                {/* INDOOR FOOTBALL CARD */}
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>Indoor football</ion-card-title>
                        <h2>
                            Field 3
                        </h2>
                        <br></br>
                        <img class="img" src="https://solertorro.com/wp-content/uploads/2020/11/IMG_5826-b.jpg"></img>




                    </ion-card-header>

                    <ion-item>
                        <ion-icon name="pin" slot="start"></ion-icon>
                        <ion-label>
                            Available Times</ion-label>
                        <ion-button fill="outline" slot="end">View</ion-button>
                    </ion-item>


                </ion-card>






                <ion-footer>
                    <ion-toolbar>
                        <ion-title class="footer">&copy; NFU 2021</ion-title>
                    </ion-toolbar>
                </ion-footer>

            </IonPage >
        );
    }
}

export default IndoorFootball;