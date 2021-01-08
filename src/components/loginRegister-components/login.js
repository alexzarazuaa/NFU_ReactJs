import { IonCheckbox, IonPage, IonText, IonItem, IonLabel, IonInput, IonButton } from "@ionic/react";
import React from "react";
import './login.css';

class Login extends React.Component {
    render() {
        return (
            <IonPage>

                <form className="ion-padding">
                    <IonItem>
                        <IonLabel>Email</IonLabel>
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
                        Login
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

export default Login;