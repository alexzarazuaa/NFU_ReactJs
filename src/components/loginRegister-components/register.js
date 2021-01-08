import { IonCheckbox, IonPage, IonText, IonItem, IonLabel, IonInput, IonButton } from "@ionic/react";
import React from "react";
import './register.css';

class Register extends React.Component {
    render() {
        return (
            <IonPage>

                <form className="ion-padding">
                    <IonItem>
                        <IonLabel>Email</IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Username</IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Password</IonLabel>
                        <IonInput type="password" />
                    </IonItem>
                    <IonItem lines="none">
                        <IonLabel>Remember me</IonLabel>
                        <IonCheckbox defaultChecked={true} slot="start" />
                    </IonItem>
                    <IonButton className="ion-margin-top" type="submit" expand="block">
                        Register
                </IonButton>

                </form>

                <ion-footer>
                    <ion-toolbar>
                        <ion-title class="footer">&copy; NFU 2021</ion-title>
                    </ion-toolbar>
                </ion-footer>

            </IonPage >
        );
    }
}

export default Register;