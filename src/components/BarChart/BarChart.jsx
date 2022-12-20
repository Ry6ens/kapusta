import s from './BarChart.scss';

import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis } from 'recharts';

function Chart() {
  // const [count, setCount] = useState(0)

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

  return (
    //   <LineChart
    //     width={500}
    //     height={500}
    //     data={data}
    //     margin={{ top: 0, right: 0}}

    // >
    // <XAxis dataKey="name" />
    //   <Tooltip />
    //   <CartesianGrid stroke="#f5f5f5" />
    //   <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
    //   <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
    // </LineChart>

    <BarChart
      width={500}
      height={500}
      data={data}
      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
    >
      <XAxis dataKey="amt" type="category" />
      <Bar dataKey="uv" fill="orange">
        <LabelList dataKey="pv" position="top" type="category" />
      </Bar>
    </BarChart>
  );
}

export default Chart;
