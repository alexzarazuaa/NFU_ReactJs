import React,{useContext} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import {  compass, alarm } from 'ionicons/icons';
import { useParams } from "react-router";
import data from '../data/dataInstalaciones.json';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../State';

import './details.css';

const Details= () => {

  console.log(data)
    //get id URL
    const  {id}  = useParams();
    console.log(id);
    const instalaciones_ar = Object.values(data);
 

    let instalacion = instalaciones_ar.find(instalacion =>  instalacion.id == id);
    console.log(instalacion.id)
    console.log(instalacion.name)

    const { state } = useContext(AppContext);
  
    if (!state.user) {
      return <Redirect to="/login" /> 
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{instalacion.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{instalacion.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
     

      </IonContent>
    </IonPage>
  );
};

export default Details;
