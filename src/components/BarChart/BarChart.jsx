import s from './BarChart.scss';

import { BarChart, Bar, XAxis, LabelList, ResponsiveContainer, Cell } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'name G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Chart({ data }) {
  const sorteredData = data.sort((a, b) => b.pv - a.pv);

  return (
    <ResponsiveContainer maxWidth="100%" height={100}>
      <BarChart
        layout={'vertical'}
        maxBarSize={18}
        // width={200}
        // height={200}
        data={sorteredData}
        // margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="amt" type="category" />
        <Bar dataKey="pv" fill="#FF751D">
          {sorteredData.map(i => (
            <Cell key={i} radius={[0, 10, 10, 0]} fill={i % 3 ? '#FFDAC0' : '#FF751D'} />
          ))}

          {/* <LabelList dataKey="pv" position="top" type="category" /> */}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
