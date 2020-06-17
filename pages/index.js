import React from "react";
import { HistoryLineChart, TurbidityChart, TempChart } from "../components";

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
        <div className="p-4">
          <div className="d-flex justify-content-center">
            <div className="flex-1 shadow p-3 m-3 bg-white rounded">
              <Title title="Data History" />
              <div className="mt-3">
                <HistoryLineChart />
              </div>
            </div>
            <div
              style={{ flex: "0.5" }}
              className="shadow p-3 m-3 bg-white rounded d-flex flex-column"
            >
              <Title title="Current Controller Status" />
              <div className="d-flex flex-column flex-1">
                <div className="d-flex mt-3 flex-1 justify-content-between align-items-center shadow-sm p-3 pl-5 pr-5 bg-white rounded background-gradient-1">
                  <span className="white title">Controller Mode</span>
                  <span className="white title">Auto</span>
                </div>
                <div className="d-flex mt-3 flex-1 justify-content-between align-items-center shadow-sm p-3 pl-5 pr-5 bg-white rounded background-gradient-2">
                  <span className="white title">Minimum Temperature</span>
                  <span className="white title">50°C</span>
                </div>
                <div className="d-flex mt-3 flex-1 justify-content-between align-items-center shadow-sm p-3 pl-5 pr-5 bg-white rounded background-gradient-3">
                  <span className="white title">Minimum Turbidity</span>
                  <span className="white title">50 mpu</span>
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
              <TurbidityChart />
              <span style={{ position: "absolute", top: "51%", left: "46%", fontWeight: '600', color: '#8884d8' }}>
                80%
              </span>
            </div>
            <div className="flex-1 shadow p-3 m-3 bg-white rounded">
              <Title title="Temperature Status" />
              <TempChart />
            </div>
          </div>
        </div>
      </>
    );
  }
}
