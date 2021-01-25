import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './profile.css';


// let changeDataSegment = () => {
//   return (
//   )
// }

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="page-profile">
          <div className="ProfileContainer">
            {/* <IonIcon icon={arrowBackOutline} className="backBtn" onClick={() => history.goBack()} /> */}
            {/* <div className="bannerImage">
            <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="banner"/>
          </div> */}
            <div className="headerProfile">


              <div className="headerRightSide">
                <span className="user--name">Juanito Fernandez</span>
                {/* <div className="headerRatings">
                  <IonIcon icon={star} className="ratingStar" />
                  <IonIcon icon={star} className="ratingStar" />
                  <IonIcon icon={star} className="ratingStar" />
                  <IonIcon icon={star} className="ratingStar" />
                  <IonIcon icon={starHalf} className="ratingStar" />
                  &nbsp;
                  <span>(12)</span>
                </div> */}
              </div>
            </div>

            {/* <div className="UserStatsProfile">
              <div className="UserStatsProfile--row">
                <div className="UserStatsProfile--lv">
                  <span className="type_title">Level: </span>
                  <span className="type_data">12</span>
                </div>
                <div>
                  <span className="type_title">Matches: </span>
                  <span className="type_data">7</span>
                </div>
              </div>
              <div className="UserStatsProfile--row">
              <IonIcon icon={home} />
              <span>Poliesportiu Ontinyent</span>

            </div>
              <div className="UserStatsProfile--row">
                <IonIcon icon={locationOutline} />
                <span>Ontinyent, Valencia</span>
              </div>
            </div> */}
   

          </div>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Profile;
