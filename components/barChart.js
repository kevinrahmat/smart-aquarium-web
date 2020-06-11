import React, { PureComponent } from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Celcius",
    temp: 590,
  },
  {
    name: "Kelvin",
    temp: 868,
  },
  {
    name: "Fahrenheit",
    temp: 1397,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/shjsn5su/";

  render() {
    return (
      <ResponsiveContainer height={300}>
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis type="number" stroke="transparent" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="temp" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
