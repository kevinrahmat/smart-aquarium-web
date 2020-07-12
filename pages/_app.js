import React from 'react';
import { Helmet } from "react-helmet";
import { FirebaseDatabaseProvider, FirebaseDatabaseNode } from "@react-firebase/database";

var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

import '../assets/scss/index.scss';
import '../node_modules/react-vis/dist/style.css';
import { Navbar } from '../components'


const config = {
  apiKey: "AIzaSyCHxff-nwKBq8dTe2CPotOCVk1SWvnviGU",
  authDomain: "smart-aquarium-telkom.firebaseapp.com",
  databaseURL: "https://smart-aquarium-telkom.firebaseio.com",
  projectId: "smart-aquarium-telkom",
  storageBucket: "smart-aquarium-telkom.appspot.com",
  messagingSenderId: "768159757606",
  appId: "1:768159757606:web:30a5a2f7e68847fffb3de7",
  measurementId: "G-5GR49PTGGY"
};

export default class HomePage extends React.Component {
  constructor () {
    super();
    this.state = {
      pageType: 'login',
    }
  }
  render () {
    const {
      pageProps,
      Component,
      store,
      router: { query },
    } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
          <title>Smart Aquarium</title>
        </Helmet>
        <div id="body" className="h-100 w-100 d-flex flex-column">
          <Navbar />
          <FirebaseDatabaseProvider firebase={firebase} {...config}>
            <Component {...pageProps} query={query} />
          </FirebaseDatabaseProvider>

        </div>
      </div>
    );
  };
}
