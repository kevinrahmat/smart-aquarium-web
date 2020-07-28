import React from "react";
import {
  FirebaseDatabaseNode,
  FirebaseDatabaseMutation,
} from "@react-firebase/database";
import { IfFirebaseAuthed, IfFirebaseUnAuthed } from "@react-firebase/auth";

import Login from '../components/login';

const Title = (props) => {
  const { style = {} } = props || {};
  return (
    <span style={{ fontSize: "16px", fontWeight: "bold", ...style }}>
      {props.title}
    </span>
  );
};

export default class Controller extends React.Component {
  constructor() {
    super();
  }
  handleClickPump(status) {
    const data = {
      ...status,
      pump: !status.pump,
    };
    this.fetchStatus(data);
  }

  handleClickHeater(status) {
    const data = {
      ...status,
      heater: !status.heater,
    };
    this.fetchStatus(data);
  }

  handleClickAutoMode(status) {
    const data = {
      ...status,
      auto_mode: !status.auto_mode,
    };
    this.fetchStatus(data);
  }

  render() {
    return (
      <>
        <style>{`
          .headline-text {
            font-weight: bold;
            font-size: 50px;
          }
        `}</style>

        <IfFirebaseAuthed>
          {() => {
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
                    temperature: temperature_current_value,
                    turbidity: turbidity_current_value,
                  } = JSON.parse(sensor);

                  const {
                    auto_mode = false,
                    heater = false,
                    pump = false,
                    vlc = false,
                  } = status;
                  const {
                    min_value: turbidity_min_value = 0,
                    status: turbidity_status = false,
                  } = turbidity;
                  const {
                    min_value: temperature_min_value = 0,
                    status: temperature_status = false,
                  } = temperature;

                  return (
                    <>
                      <FirebaseDatabaseMutation type="set" path="status">
                        {({ runMutation }) => {
                          this.fetchStatus = runMutation;
                          return "";
                        }}
                      </FirebaseDatabaseMutation>

                      <div className="p-4 h-100">
                        <div className="h-100 d-flex justify-content-center">
                          <div className="d-flex flex-column flex-1">
                            <div
                              style={{ flex: "0.5" }}
                              className="shadow p-3 m-3 bg-white rounded d-flex flex-column"
                            >
                              <Title title="Auto Mode" />
                              <button
                                onClick={() => this.handleClickAutoMode(status)}
                                className="flex-1 d-flex align-items-center justify-content-center transparent-btn"
                              >
                                <span className="headline-text">
                                  {auto_mode ? "Auto" : "Manual"}
                                </span>
                              </button>
                            </div>
                            <div className="d-flex flex-1">
                              <div
                                style={{ flex: "0.5" }}
                                className="shadow p-3 m-3 bg-white rounded d-flex flex-column"
                              >
                                <Title title="Minimum Temperature" />
                                <div className="flex-1 d-flex align-items-center justify-content-center">
                                  <span className="headline-text">
                                    {temperature_min_value}
                                  </span>
                                </div>
                              </div>
                              <div
                                style={{ flex: "0.5" }}
                                className="shadow p-3 m-3 bg-white rounded d-flex flex-column"
                              >
                                <Title title="Minimum Turbidity" />
                                <div className="flex-1 d-flex align-items-center justify-content-center">
                                  <span className="headline-text">
                                    {turbidity_min_value}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex flex-column flex-1">
                            <div
                              style={{ flex: "0.5" }}
                              className={
                                "shadow p-3 m-3 rounded d-flex flex-column " +
                                (pump ? "bg-success" : "bg-danger")
                              }
                            >
                              <Title title="Pump" style={{ color: "white" }} />
                              <button
                                disabled={auto_mode}
                                onClick={() => this.handleClickPump(status)}
                                className="flex-1 d-flex align-items-center justify-content-center transparent-btn"
                              >
                                <span className="headline-text white">
                                  {pump ? "ON" : "OFF"}
                                </span>
                              </button>
                            </div>

                            <div
                              style={{ flex: "0.5" }}
                              className={
                                "shadow p-3 m-3 rounded d-flex flex-column " +
                                (heater ? "bg-success" : "bg-danger")
                              }
                            >
                              <Title
                                title="Heater"
                                style={{ color: "white" }}
                              />
                              <button
                                disabled={auto_mode}
                                onClick={() => this.handleClickHeater(status)}
                                className="flex-1 d-flex align-items-center justify-content-center transparent-btn"
                              >
                                <span className="headline-text white">
                                  {heater ? "ON" : "OFF"}
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
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
