import { IonButton, IonCard,IonCardHeader, IonDatetime, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonPage } from "@ionic/react";
import React from "react";
import Footer from '../components/footer-component/Footer'
import '../theme/football_11.css'


const Football7: React.FC = () => {
        return (
            <IonPage class="cards11">
                <h2>FOOTBALL 7 </h2>
                <IonListHeader>

                    {/* FOOTBALL 7  CARD */}
                    <IonCard>
                        <IonCardHeader>

                            <h2>
                                Field 1
                        </h2>
                            <br></br>
                            <img  src="https://www.alquilerdepistas.com/images/instalaciones/ontinyent-campo-futbol-cesped-artificial-191105151738.jpg"></img>



                        </IonCardHeader>

                        <IonItem>
                            <IonIcon name="pin" slot="start"></IonIcon>
                            <IonLabel>
                                 Times</IonLabel>
                            <IonButton fill="outline" slot="end">Booking</IonButton>
                            <IonItem id="date">

                                <IonDatetime display-format="D MMM YYYY H:mm" min="2021" max="2021" value="2021-01-11T11:06Z"></IonDatetime>
                            </IonItem>
                        </IonItem>


                    </IonCard>

                    {/* FOOTBALL 7  CARD */}
                    <IonCard>
                        <IonCardHeader>

                            <h2>
                                Field 2
                        </h2>
                            <br></br>
                            <img  src="https://www.alquilerdepistas.com/images/instalaciones/ontinyent-campo-futbol-cesped-artificial-191105151738.jpg"></img>




                        </IonCardHeader>

                        <IonItem>
                            <IonIcon name="pin" slot="start"></IonIcon>
                            <IonLabel>
                                 Times</IonLabel>
                            <IonButton fill="outline" slot="end">Booking</IonButton>
                            <IonItem id="date">

                                <IonDatetime display-format="D MMM YYYY H:mm" min="2021" max="2021" value="2021-01-11T11:06Z"></IonDatetime>
                            </IonItem>
                        </IonItem>


                    </IonCard>

                    {/* FOOTBALL 7  CARD */}
                    <IonCard>
                        <IonCardHeader>

                            <h2>
                                Field 3
                        </h2>
                            <br></br>
                            <img src="https://www.alquilerdepistas.com/images/instalaciones/ontinyent-campo-futbol-cesped-artificial-191105151738.jpg"></img>




                        </IonCardHeader>

                        <IonItem>
                            <IonIcon name="pin" slot="start"></IonIcon>
                            <IonLabel>
                                 Times</IonLabel>
                            <IonButton fill="outline" slot="end" href="date">Booking</IonButton>

                            <IonItem id="date">

                                <IonDatetime display-format="D MMM YYYY H:mm" min="2021" max="2021" value="2021-01-11T11:06Z"></IonDatetime>
                            </IonItem>
                        </IonItem>


                    </IonCard>


                </IonListHeader>





            
                 <Footer/>
            

            </IonPage >
        );
    
}

export default Football7;