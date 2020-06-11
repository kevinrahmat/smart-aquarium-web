import React, { PureComponent } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Group A", value: 800 },
  { name: "Group B", value: 200 },
];
const COLORS = ["#0088FE", "transparent"];

export default class TurbidityChart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/3Leoa7f4/";

  render() {
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
