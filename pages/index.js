import React from "react";
import firebase from "firebase/app";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import { IfFirebaseAuthed, IfFirebaseUnAuthed } from "@react-firebase/auth";
import { HistoryLineChart, TurbidityChart, TempChart } from "../components";

import Login from "../components/login";

const Title = (props) => {
  return (
    <span style={{ fontSize: "16px", fontWeight: "bold" }}>{props.title}</span>
  );
};

export default class Dashboard extends React.Component {
  render() {
    return (
      <>
        <style>{`
          .background-gradient-1 {
            background: #00B4DB;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #0083B0, #00B4DB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          }
          .background-gradient-3 {
            background: #f953c6;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #b91d73, #f953c6);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #b91d73, #f953c6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          }
          .background-gradient-2 {
            background: #f85032;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #e73827, #f85032);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #e73827, #f85032); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          }
          .title {
            font-size: 16px;
            font-weight: 600;
          }
        `}</style>
        <IfFirebaseAuthed>
          {(data) => {
            const {
              isSignedIn = false,
              user,
              user: { emailVerified = false } = {},
            } = data || {};
            if (isSignedIn) {
              if (!emailVerified) {
                alert("Please verify your email address");
                firebase.auth().signOut();
                user
                  .sendEmailVerification()
                  .then(function () {
                    console.log("email sent");
                  })
                  .catch(function (error) {
                    console.log("email error");
                  });
                return <> </>;
              }
            }
            return (
              <FirebaseDatabaseNode path="/">
                {(data) => {
                  const { isLoading = false, value } = data || {};
                  const {
                    status = {},
                    temperature = {},
                    turbidity = {},
                    sensor = '{"temperature":0,"turbidity":0}',
                  } = value || {};

                  const {
                    auto_mode = false,
                    heater = false,
                    pump = false,
                    vlc = false,
                  } = status;
                  const {
                    min_value: turbidity_min_value = 0,
                    status: turbidity_status = false,
                    value: turbidity_current_value = 0,
                  } = turbidity;
                  const {
                    min_value: temperature_min_value = 0,
                    status: temperature_status = false,
                    value: temperature_current_value = 0,
                  } = temperature;

                  return (
                    <div className="p-4">
                      <div className="d-flex justify-content-center">
                        <div
                          style={{ flex: "0.5" }}
                          className="shadow p-3 m-3 bg-white rounded d-flex flex-column"
                        >
                          <div className="d-flex flex-column flex-1">
                            <div className="d-flex mt-3 flex-1 justify-content-between align-items-center shadow-sm p-3 pl-5 pr-5 bg-white rounded background-gradient-2">
                              <span className="white title">
                                Minimum Temperature
                              </span>
                              <span className="white title">
                                {temperature_min_value}°C
                              </span>
                            </div>
                            <div className="d-flex mt-3 flex-1 justify-content-between align-items-center shadow-sm p-3 pl-5 pr-5 bg-white rounded background-gradient-3">
                              <span className="white title">
                                Minimum Turbidity
                              </span>
                              <span className="white title">
                                {turbidity_min_value} NTU
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{ flex: "0.5" }}
                          className="shadow p-3 m-3 bg-white rounded d-flex flex-column"
                        >
                          <div className="d-flex flex-column flex-1">
                            <div className="d-flex mt-3 flex-1 justify-content-between align-items-center shadow-sm p-3 pl-5 pr-5 bg-white rounded background-gradient-1">
                              <span className="white title">
                                Controller Mode
                              </span>
                              <span className="white title">
                                {auto_mode ? "Auto" : "Manual"}
                              </span>
                            </div>
                            <div className="d-flex mt-3 flex-1 justify-content-between align-items-center shadow-sm p-3 pl-5 pr-5 bg-white rounded background-gradient-2">
                              <span className="white title">Pump Status</span>
                              <span className="white title">
                                {pump ? "On" : "Off"}
                              </span>
                            </div>
                            <div className="d-flex mt-3 flex-1 justify-content-between align-items-center shadow-sm p-3 pl-5 pr-5 bg-white rounded background-gradient-3">
                              <span className="white title">Heater Status</span>
                              <span className="white title">
                                {heater ? "On" : "Off"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div
                          style={{ position: "relative" }}
                          className="shadow p-3 m-3 bg-white rounded"
                        >
                          <Title title="Turbidity Status" />
                          <TurbidityChart
                            current_value={turbidity_current_value}
                          />
                          <span
                            style={{
                              position: "absolute",
                              top: "51%",
                              left: "49%",
                              fontWeight: "600",
                              color: "#8884d8",
                            }}
                          >
                            {turbidity_current_value}
                          </span>
                        </div>
                        <div className="flex-1 shadow p-3 m-3 bg-white rounded">
                          <Title title="Temperature Status" />
                          <TempChart
                            current_value={temperature_current_value}
                          />
                        </div>
                      </div>
                    </div>
                  );
                }}
              </FirebaseDatabaseNode>
            );
          }}
        </IfFirebaseAuthed>
        <IfFirebaseUnAuthed>
          {() => {
            return <Login />;
          }}
        </IfFirebaseUnAuthed>
      </>
    );
  }
}
