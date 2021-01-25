import { IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import React, { Component } from 'react';
import './footer.css';


/**
 * FOOTER COMPONENT FOR ALL NFU APP
 */

const Footer: React.FC = () => {
   
        return (

                    <IonFooter>
                        <IonToolbar>
                            <IonTitle class="footer">&copy; NFU 2021</IonTitle>
                        </IonToolbar>
                    </IonFooter>

    
        );
    
}
export default Footer;