// this component for home page
import React, { Component } from 'react';
import '../theme/home.css'
import Footer from '../components/footer-component/footer'
class Home extends Component {
    render() {
        return (
            <>
                <ion-app>
                    <div class="banner">
                        <div class="container">
                            <br></br>
                            <br></br>
                            <br></br>
                            <h2 class="logo-font">NOS FALTA UNO </h2>
                            <p>Inicia tu Mejor  <i>PACHANGA</i> </p>
                        </div>
                    </div>

                    <Footer />

                </ion-app>
            </>

        );
    }
}
export default Home;