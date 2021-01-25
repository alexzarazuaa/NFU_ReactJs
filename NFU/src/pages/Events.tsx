import React,{useContext} from 'react';
import { AppContext } from '../State';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Event_List from '../components/Event/Event_List';
import Footer from '../components/Footer/Footer';
import './Events.css';
import Navbar from '../components/Navbar/Navbar';
import { Redirect } from 'react-router-dom';

const Events: React.FC = () => {
  const { state } = useContext(AppContext);
  
  if (!state.user) {
    return <Redirect to="/login" /> 
  }
  return (
    <IonPage>
      <IonHeader>
      <Navbar page={"EVENTS"}></Navbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">EVENTS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Event_List></Event_List>
      </IonContent>
      <Footer/>
    </IonPage>
  );
};

export default Events;
