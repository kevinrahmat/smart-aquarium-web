import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const historyData = [];

for (let i = 0; i < 20; i++) {
  historyData.push({ name: `${i}.00`, temp: getRandomArbitrary(0, 40) });
}

const HistoryLineChart = () => (
  <ResponsiveContainer height={300}>
    <AreaChart
      data={historyData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <CartesianGrid stroke="rgba(0,0,0,0.1)" strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="temp" stroke="#DF533B" fill="#DF533B" />
    </AreaChart>
  </ResponsiveContainer>
);

export default HistoryLineChart;
