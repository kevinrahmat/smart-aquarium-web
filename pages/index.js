import React from 'react';
import { Helmet } from "react-helmet";

import LoginPage from './login';

export default class HomePage extends React.Component {
  constructor () {
    super();
    this.state = {
      pageType: 'login',
    }
  }
  render () {
    const { pageType } = this.state;

    return (
      <>
        <div className="main">
          <Helmet>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            
            <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet"></link>
            
            <title>Smart Aquarium</title>
          </Helmet>
          <div id="body" className="h-100 w-100 d-flex flex-column">
            <LoginPage />
          </div>
        </div>
        <style>
          {/* ================================== Replaced Style ================================== */}
          {`
            .btn {
              border-radius: 20px;
            }

            .form-control {
              border-top: 0;
              border-right: 0;
              border-left: 0;
              border-radius: 0;
            }
            .form-control:focus {
              box-shadow: unset;
              border-color: #3F3D56;
            }
          `}
          {/* ================================== Global Style ================================== */}
          {`
            body, #__next, .main {
              height: 100vh;
            }
            p, h1, h2, h3, h4, h5, span, label, button {
              font-family: Nunito, sans-serif;
              margin: 0;
            }
            .flex-1 {
              flex: 1;
            }
            .pointer {
              cursor: pointer;
            }
          `}
          {/* ================================== Global Layout ================================== */}
          {`
            body, #__next, .main {
              height: 100vh;
            }
          `}
          {/* ================================== Global Color ================================== */}
          {`

            .white {
              color: white;
            }
            .bg-white {
              background-color: white;
            }

            .pastel-red {
              color: #FF6C6F;
            }
            .bg-pastel-red {
              background-color: #FF6C6F;
            }

            .faded-red {
              color: #FF7D80;
            }
            .bg-faded-red {
              background-color: #FF7D80;
            }
            
            .gray {
              color: gray;
            }
            .bg-gray {
              background-color: gray;
            }

            .bright-gray {
              color: #3F3D56;
            }
            .bg-bright-gray {
              background-color: #3F3D56;
            }
          `}
        </style>

      </>
    );
  };
}
