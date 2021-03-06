import React from 'react';
import { person, compass } from 'ionicons/icons';
import {

    IonCard,
    IonIcon

  } from '@ionic/react';

const Event = (props) =>{

     function eventClick(event_id){
        // alert(event_id);    
    }
    const event = props.item;
    return (
        <>
          <IonCard className="event" onClick={() => eventClick(event.id)} routerLink={'/event/'+event.id} >
            <div className="event-image">
              <img src={event.image} alt="img"></img>
            </div>
            <div className="event-content">
              <span className="event-content-title">{event.title}</span>
            </div>
            <div className="event-players badge badge-blue">
              <span className="badge-icon"><IonIcon icon={person}/></span>
              <span>{event.players}/{event.maxplayers}</span>
            </div>
            <div className="event-location badge badge-green">
              <span className="badge-icon"><IonIcon icon={compass}/></span>
              <span>{event.location.city}</span>
            </div>
          </IonCard>
        </>
    )
}

export default Event;