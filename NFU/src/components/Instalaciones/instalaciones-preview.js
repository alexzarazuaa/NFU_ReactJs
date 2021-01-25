import React from 'react';
import { pinSharp, heartOutline, enterOutline, cashSharp, timeSharp } from 'ionicons/icons';

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from '@ionic/react';
import './Instalaciones_preview.css';


const InstalacionesPreview = (props) => {

  const Props = props;

   let eventClick = (event_id) =>{
        alert(event_id);    
    }

  return (
    <IonCard className="centerCard"  onClick={() => eventClick(Props.info.id)} routerLink={'/app/instalacion/'+Props.info.id}>
      <section className="centerContent">
        <article className="centerContent__left">
          <img src={Props.info.imagen} />
        </article>
        <article className="centerContent__right">
          <IonCardTitle>{Props.info.name}</IonCardTitle>
          <IonCardSubtitle className="CenterLocation"><IonIcon icon={pinSharp} className="playersIcon" />{Props.info.ubication}</IonCardSubtitle>
          <IonCardContent>

            <IonIcon icon={heartOutline} className="centerContent__actions--icon" />&nbsp; &nbsp; &nbsp;
            <IonIcon icon={enterOutline} className="centerContent__actions--icon"  />

          </IonCardContent>

        </article>
        <article className="shadowMobileCard"></article>
      </section>
    </IonCard>
  );

}


export default InstalacionesPreview;