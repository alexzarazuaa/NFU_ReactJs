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
import { tv, footballOutline, phonePortrait, apps } from 'ionicons/icons';
import Epg from './components/Epg-Component/Epg';
import Menu from './components/menu-component/menu';
import Contact from './pages/contact'
import Login from './components/loginRegister-components/login';
import Register from './components/loginRegister-components/register';

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
          <Route path="/home" component={Menu} exact={true} />
          <Route path="/signin" component={Login} exact={true} />
          <Route path="/signup" component={Register} exact={true} />
          <Route path="/contact" component={Contact} exact={true} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {/* <IonTabButton tab="Epg" href="/epg">
            <IonIcon icon={tv} />
            <IonLabel>Epg</IonLabel>
          </IonTabButton> */}
          <IonTabButton tab="Contact" href="/contact">
            <IonIcon icon={phonePortrait} />
            <IonLabel>Contact Us</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Home" href="/home">
            <IonIcon icon={apps} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Contact" href="/contact">
            <IonIcon icon={footballOutline} />
            <IonLabel>Modalities</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>

    </IonReactRouter>
  </IonApp>
);

export default App;
