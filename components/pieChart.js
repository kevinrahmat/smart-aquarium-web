import React, { PureComponent } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const COLORS = ["#0088FE", "transparent"];

export default class TurbidityChart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/3Leoa7f4/";
  constructor() {
    super()
    this.state = {
      data: [
        { name: "Turbidity", value: 0 },
        { name: "Transparent", value: 100 },
      ],
    }
  }

  componentDidUpdate(prevProps) {
    const { current_value } = this.props;
    if (prevProps.current_value !== current_value) {
      this.setState({
        data: [
          { name: "Turbidity", value: current_value * 33.3 },
          { name: "Transparent", value: 100 - current_value * 33.3 },
        ],
      })
    }
  }

  render() {
    const { current_value } = this.props;
    const { data } = this.state;
    return (
      <ResponsiveContainer height={300} width={300}>
        <PieChart onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
