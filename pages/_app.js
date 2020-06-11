import React from 'react';
import { Helmet } from "react-helmet";

import '../assets/scss/index.scss';
import '../node_modules/react-vis/dist/style.css';
import { Navbar } from '../components'

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
          <Component {...pageProps} query={query} />
        </div>
      </div>
    );
  };
}
