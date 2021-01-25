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
import Navbar from '../components/Navbar/Navbar';
import Event_List from '../components/Event/Event_List';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { Redirect } from 'react-router-dom';
import { ellipsisVertical } from 'ionicons/icons';

const Home: React.FC = () => {
  const { state } = useContext(AppContext);


  if (!state.user) {
    console.log('%cNO HAY USER", "color: black; font-weight: 700;');
    return <Redirect to="/" />
  }

  return (
    <IonPage>
      <Navbar page={"HOME"}></Navbar>
        <Event_List/>
      <Footer/>
    </IonPage>
  );
};

export default Home;
