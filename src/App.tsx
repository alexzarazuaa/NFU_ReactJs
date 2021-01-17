import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { tv, footballOutline, phonePortrait, homeSharp, homeOutline } from 'ionicons/icons';
import Epg from './components/Epg-Component/Epg';
import Home from './components/home-component/home';
import Contact from './pages/contact'
import Login from './components/loginRegister-components/login';
import Register from './components/loginRegister-components/register';
import Modalities from './components/modalities-component/modalities';
import IndoorFootball from './pages/indoorFootball';
import Football7 from './pages/football7';
import Football_11 from './pages/football11';
import Profile from './components/profile-component/profile'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';



const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/epg" component={Epg} exact={true} />
          <Route path="/home" component={Home} exact={true} />
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/contact" component={Contact} />
          <Route path="/modalities" component={Modalities} />
          <Route path="/indoorfootball" component={IndoorFootball} />
          <Route path="/football-7" component={Football7} />
          <Route path="/football-11" component={Football_11} />
          <Route path="/profile" component={Profile} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/home">
            <IonIcon icon={homeSharp} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Modalities" href="/modalities">
            <IonIcon icon={footballOutline} />
            <IonLabel>Modalities</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Contact" href="/contact">
            <IonIcon icon={phonePortrait} />
            <IonLabel>Contact Us</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Epg" href="/epg">
            <IonIcon icon={tv} />
            <IonLabel>Epg</IonLabel>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>

    </IonReactRouter>
  </IonApp>
);

export default App;
