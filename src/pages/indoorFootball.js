import { IonPage } from "@ionic/react";
import React from "react";
import Footer from '../components/footer-component/footer';
import '../theme/indoor.css'


class IndoorFootball extends React.Component {
    render() {
        return (
            <IonPage class="cards">
                <h2>Indoor football</h2>
                <ion-list-header>

                    {/* INDOOR FOOTBALL CARD */}
                    <ion-card >
                        <ion-card-header>

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
                            <ion-button fill="outline" slot="end">Booking</ion-button>
                            <ion-item id="date">

                                <ion-datetime display-format="D MMM YYYY H:mm" min="2021" max="2021" value="2021-01-11T11:06Z"></ion-datetime>
                            </ion-item>
                        </ion-item>


                    </ion-card>

                    {/* INDOOR FOOTBALL CARD */}
                    <ion-card>
                        <ion-card-header>

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
                            <ion-button fill="outline" slot="end">Booking</ion-button>
                            <ion-item id="date">

                                <ion-datetime display-format="D MMM YYYY H:mm" min="2021" max="2021" value="2021-01-11T11:06Z"></ion-datetime>
                            </ion-item>
                        </ion-item>


                    </ion-card>

                    {/* INDOOR FOOTBALL CARD */}
                    <ion-card>
                        <ion-card-header>

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
                            <ion-button fill="outline" slot="end" href="date">Booking</ion-button>

                            <ion-item id="date">

                                <ion-datetime display-format="D MMM YYYY H:mm" min="2021" max="2021" value="2021-01-11T11:06Z"></ion-datetime>
                            </ion-item>
                        </ion-item>


                    </ion-card>


                </ion-list-header>




                <Footer />

            </IonPage >
        );
    }
}

export default IndoorFootball;