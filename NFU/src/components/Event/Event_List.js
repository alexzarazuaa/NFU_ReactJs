import React from 'react';
import events from '../../data/data.json';

import './event.css';

import Event from './Event.js';

export default class Event_List extends React.Component {

    constructor(props){
      super(props);      
      this.state = { 
        events: events.events,
      };
      const slideOpts = {
        slidesPerView: 1,
        spaceBetween: "20px"

      };           
    }

  
    render() {
      console.log("render");
      console.log(this.state.events)
      const events_array = Object.values(this.state.events);
      return (
        <>

          <h1 className="main_title">MENU</h1>
          <div className="events">
          {
              events_array.map((event,index,arr) =>
                  (<Event className="event" key={index} item={event} ></Event>)            
                  // (<EpgRow key={index} dayOfWeek={keyByDay} events={this.state.events.get(keyByDay)} />)
              )
            }  
          </div>
        </>
       
      );
    }
}