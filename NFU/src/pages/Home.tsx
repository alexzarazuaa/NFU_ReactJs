import React, { useContext } from 'react';
import { AppContext } from '../State';

import {

  IonPage,



} from '@ionic/react';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Event_List from '../components/Event/Event_List';
// import i18n from "i18next";
// import { useTranslation, initReactI18next } from "react-i18next";
import { Redirect } from 'react-router-dom';


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
