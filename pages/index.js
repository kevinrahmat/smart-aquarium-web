import React from 'react';
import {
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
  LineSeries
} from 'react-vis';

function Chart({data}) {
  return (
    <XYPlot width={400} height={300}><XAxis/><YAxis/>
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      <LineSeries
        color="#585ec7"
        data={data}
      />
    </XYPlot>
  );
}

const data = new Array(19).fill(0).reduce((prev, curr) => [...prev, {
  x: prev.slice(-1)[0].x + 1,
  y: prev.slice(-1)[0].y * (0.9 + Math.random() * 0.2) 
}], [{x: 0, y: 10}]);

const Title = (props) => {
  return (
    <span style={{ fontSize: '16px', fontWeight: 'bold' }} >
      {props.title}
    </span>
  )
}

export default class Dashboard extends React.Component {
  render () {
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
              <Chart data={data} />
            </div>
            <div style={{ flex: '0.5' }} className="shadow p-3 m-3 bg-white rounded d-flex flex-column">
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
                  <span className="white title">Minimum Turbidity
                  </span>
                  <span className="white title">40°C</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="shadow p-3 m-3 bg-white rounded">
              <Title title="Turbidity Status" />
              <Chart data={data} />
            </div>
            <div className="flex-1 shadow p-3 m-3 bg-white rounded">
              <Title title="Temperature Status" />
              <Chart data={data} />
            </div>
          </div>
        </div>
      </>
    )
  }
}