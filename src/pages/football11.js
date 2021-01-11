import { IonPage } from "@ionic/react";
import React from "react";
import Footer from '../components/footer-component/footer'
//import '../theme/FOOTBALL 11.css'
import '../theme/football_11.css'


class Football_11 extends React.Component {
    render() {
        return (
            <IonPage class="cards11">
                <h2>FOOTBALL 11 </h2>
                <ion-list-header>

                    {/* FOOTBALL 11  CARD */}
                    <ion-card >
                        <ion-card-header>

                            <h2>
                                Field 1
                        </h2>
                            <br></br>
                             <img class="img" src="https://www.alquilerdepistas.com/images/instalaciones/ontinyent-campo-futbol-cesped-artificial-191105151738.jpg"></img>



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

                    {/* FOOTBALL 11  CARD */}
                    <ion-card>
                        <ion-card-header>

                            <h2>
                                Field 2
                        </h2>
                            <br></br>
                             <img class="img" src="https://www.alquilerdepistas.com/images/instalaciones/ontinyent-campo-futbol-cesped-artificial-191105151738.jpg"></img>




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

                    {/* FOOTBALL 11  CARD */}
                    <ion-card>
                        <ion-card-header>

                            <h2>
                                Field 3
                        </h2>
                            <br></br>
                             <img class="img" src="https://www.alquilerdepistas.com/images/instalaciones/ontinyent-campo-futbol-cesped-artificial-191105151738.jpg"></img>




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





            
                <Footer/>
            

            </IonPage >
        );
    }
}

export default Football_11;