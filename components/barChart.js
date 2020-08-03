import React, { PureComponent } from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default class BarChart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/shjsn5su/";
  constructor() {
    super()
    this.state = {
      data: [
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
      ],
    }
  }

  componentDidUpdate(prevProps) {
    const { current_value } = this.props;
    if (prevProps.current_value !== current_value) {
      this.setState({
        data: [
          {
            name: "Celcius",
            temp: current_value,
          },
          {
            name: "Fahrenheit",
            temp: (Number(current_value) * 9/5) + 32,
          },
          {
            name: "Kelvin",
            temp: Number(current_value) + 273.15,
          },
        ],
      })
    }
  }

  render() {
    const { data } = this.state;
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
