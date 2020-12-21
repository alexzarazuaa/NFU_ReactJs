//Dependencies
import React from 'react';
import epgData from '../data/epg.json';
import {
  IonSlides,
  IonSlide,
  IonRow,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent

} from '@ionic/react';
//Assets
import './Epg.css';

export default class Epg extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: Object.values(epgData.events).reverse(),
      name: epgData.name,
      title: epgData.title,
    };

    this.handleClick = this.handleClick.bind(this);
    //this.ConvertSeconds = this.ConvertSeconds.bind(this);

  }

  componentDidMount() {
    //Ja vorem
  }


  ConvertSeconds(seconds) {
    return new Date(seconds * 1000).toISOString().substr(11, 8)
  }

  handleClick(start, duration, name) {
    console.log(this.state);
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = this.state.title;
    alert.subHeader = name;
    //alert.message = ("start:" + start + " End:" + (start + duration));
    alert.message = ("start:" + this.ConvertSeconds(start) + " End:" + this.ConvertSeconds((start + duration)));
    alert.buttons = ['OK'];
    document.body.appendChild(alert);
    return alert.present();

  }
  DescriptionClik(text) {
    console.log(this.state.events.spa);
    console.log(text)
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = this.state.title;
    alert.subHeader = 'Descripcion';
    alert.message = text;
    alert.buttons = ['Return'];
    document.body.appendChild(alert);
    return alert.present();
  }

  convertUTCtoDate(utcEpoch) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', time: 'numeric' };
    //console.log(options)
    let d = new Date(0);
    d.setUTCSeconds(utcEpoch);
    return d.toLocaleString("es-ES", options);
  }


  render() {
    console.log(this.state);
    console.log("render");
    const slideOpts = {
      slidesPerView: 'auto',
      zoom: true,
      grabCursor: true,
      virtual: true,
    };


    return (

      <IonRow>
        <IonLabel className="my-label">
          <ion-header>
            {this.state.title}
            <img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Logo_TVE-1.svg"></img>
          </ion-header>
        </IonLabel>
        <IonSlides options={slideOpts}>

          {this.state.events.map((eventEPG, index) => (
            <IonSlide >
              <IonCard key={'col_' + index}>
                <IonCardHeader>
                  <IonCardTitle>{this.convertUTCtoDate(eventEPG.spa.start)}</IonCardTitle>
                  <IonCardTitle>
                    <ion-chip>
                      <ion-icon name="heart" color="dark"></ion-icon>
                      <ion-label key={index}
                        onClick={
                          () => this.handleClick(eventEPG.spa.start, eventEPG.spa.duration, eventEPG.spa.name)
                        }>
                        {eventEPG.spa.name}
                      </ion-label>
                    </ion-chip>


                  </IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  <ion-title key={index} onClick={
                    () => this.DescriptionClik(eventEPG.spa.ext.text)
                  }>
                    Descripcion
                    </ion-title>
                  <ion-buttons slot="primary">
                  </ion-buttons>
                </IonCardContent>
              </IonCard>
            </IonSlide>
          ))}
        </IonSlides>
      </IonRow>

    );
  }
}