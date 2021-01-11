import { IonCheckbox, IonPage, IonText, IonItem, IonLabel, IonInput, IonButton } from "@ionic/react";
import React from "react";
import Footer from '../components/footer-component/footer'
//import './contact.css';

class Contact extends React.Component {
    render() {
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
                    <ion-item>
                        <ion-label>Message</ion-label>
                        <ion-textarea rows="8" cols="20" placeholder="   Enter  your message here..."></ion-textarea>
                    </ion-item>
                    <IonButton className="ion-margin-top" type="submit" expand="block">
                        Send Message
                </IonButton>

                </form>

               <Footer/>
            </IonPage >
        );
    }
}

export default Contact;