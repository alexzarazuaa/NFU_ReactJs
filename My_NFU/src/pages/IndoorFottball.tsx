import { IonButton, IonCard,IonCardHeader, IonDatetime, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonPage } from "@ionic/react";
import React from "react";
import Footer from '../components/footer-component/Footer'
import '../theme/indoor.css'


const Football11: React.FC = () => {
        return (
            <IonPage class="indoor">
                <h2>INDOOR FOOTBALL</h2>
                <IonListHeader>

                    {/* FOOTBALL 7  CARD */}
                    <IonCard>
                        <IonCardHeader>

                            <h2>
                                Field 1
                        </h2>
                            <br></br>
                           <img  src="https://solertorro.com/wp-content/uploads/2020/11/IMG_5826-b.jpg"></img>


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
                           <img  src="https://solertorro.com/wp-content/uploads/2020/11/IMG_5826-b.jpg"></img>



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
                            <img  src="https://solertorro.com/wp-content/uploads/2020/11/IMG_5826-b.jpg"></img>




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

export default Football11;