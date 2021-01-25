import React, { useContext, useState } from 'react';
import { AppContext } from '../State';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonPopover,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
  IonButton,
  IonIcon

} from '@ionic/react';
import { personSharp } from 'ionicons/icons';
import './Home.css';
import Footer from '../components/Footer/Footer';
import Event_List from '../components/Event/Event_List';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { Redirect } from 'react-router-dom';
import { ellipsisVertical } from 'ionicons/icons';

const Home: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [showUserMenuEvent, setShowUserMenuEvent] = useState(null);
  const doLogout = () => {
    setShowUserMenuEvent(null);
    dispatch({ type: 'SET_LOGOUT' });
    window.location.reload();
  };

  if (!state.user) {
    console.log('%cNO HAY USER", "color: black; font-weight: 700;');
    return <Redirect to="/" />
  }

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>HOME</IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear" onClick={e => { e.persist(); setShowUserMenuEvent(e) }}>
              <IonIcon icon={ellipsisVertical} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonPopover
          event={showUserMenuEvent}
          isOpen={!!showUserMenuEvent}
          onDidDismiss={() => setShowUserMenuEvent(null)}>
          <IonContent>
            <IonList>
              <IonItem onClick={e => { e.preventDefault(); doLogout() }} detail={true} href="/login">
                <IonLabel>LOGOUT</IonLabel>
              </IonItem>
              <IonItem>

                <IonIcon icon={personSharp} />
                <IonLabel>{state.user}</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonPopover>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1ded</IonTitle>

          </IonToolbar>
        </IonHeader>
        <Event_List></Event_List>
      </IonContent>
      <Footer/>
    </IonPage>
  );
};

export default Home;
