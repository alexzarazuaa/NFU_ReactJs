import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <>
                <ion-app>
                    <ion-footer>
                        <ion-toolbar>
                            <ion-title class="footer">&copy; NFU 2021</ion-title>
                        </ion-toolbar>
                    </ion-footer>

                </ion-app>
            </>
        );
    }
}
export default Footer;