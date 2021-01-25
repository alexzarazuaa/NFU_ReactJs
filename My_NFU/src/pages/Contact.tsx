import { IonCheckbox, IonPage, IonText, IonItem, IonLabel, IonInput, IonButton, IonTextarea } from "@ionic/react";
import React from "react";
import Footer from '../components/footer-component/Footer'
//import './contact.css';


const Contact: React.FC = () => {

        return (
            <IonPage>

                <form className="ion-padding">
                    <IonItem>
                        <IonLabel>First Name</IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Last Name</IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Email</IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Message</IonLabel>
                        <IonTextarea  placeholder="Enter  your message here..."></IonTextarea>
                    </IonItem>
                    <IonButton className="ion-margin-top" type="submit" expand="block">
                        Send Message
                </IonButton>

                </form>

               <Footer/>
            </IonPage >
        );
    
}

export default Contact;