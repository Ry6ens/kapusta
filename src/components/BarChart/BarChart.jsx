import useMediaQuery from '@mui/material/useMediaQuery';

import s from './BarChart.module.scss';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  LabelList,
} from 'recharts';

function Chart({ data }) {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const sorteredData = data.sort((a, b) => b.price - a.price);

  const renderCustomizedLabelName = ({ x, y, value }) => {
    return (
      <g className={s.name}>
        <text x={x} y={y - 10} dominantBaseline="middle">
          {value}
        </text>
      </g>
    );
  };

  const renderCustomizedLabel = ({ x, y, width, value }) => {
    if (isMobile) {
      return (
        <g className={s.price}>
          <text x={x + 60 + width / 2} y={y - 10} dominantBaseline="middle">
            {`${value} UAH`}
          </text>
        </g>
      );
    }

    return (
      <g className={s.text}>
        <text
          x={x + width / 1.5}
          y={y - 20}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {`${value} UAH`}
        </text>
      </g>
    );
  };

  const renderCustomizedAxisTick = ({ x, y, payload }) => {
    if (isMobile) {
      return (
        <g transform={`translate(${x},${y})`} className={s.text}>
          <text x={7} y={0} dy={-20} dominantBaseline="middle">
            {payload.value}
          </text>
        </g>
      );
    }

    return (
      <g transform={`translate(${x},${y})`} className={s.text}>
        <text x={0} y={0} dy={16} textAnchor="middle">
          {payload.value}
        </text>
      </g>
    );
  };

  const dinamicHight = data?.length * 55;

  if (isMobile) {
    return (
      <ResponsiveContainer maxWidth="100%" height={dinamicHight}>
        <BarChart data={sorteredData} layout="vertical" maxBarSize={18}>
          <XAxis type="number" hide axisLine={false} tickLine={false} />
          <YAxis
            hide
            type="category"
            dataKey="name"
            tick={renderCustomizedAxisTick}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip cursor={{ fill: 'transparent' }} />
          <Bar dataKey="price">
            {sorteredData.map((_, i) => (
              <Cell
                key={`${i}`}
                fill={i % 3 ? 'var(--second-accent-color)' : 'var(--accent-color)'}
                radius={[0, 10, 10, 0]}
              />
            ))}

            <LabelList
              dataKey="name"
              fill="var(--text-color)"
              content={renderCustomizedLabelName}
            />
            <LabelList
              dataKey="price"
              fill="var(--text-color)"
              content={renderCustomizedLabel}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <div className={s.wrap}>
      <ResponsiveContainer width="100%" height={dinamicHight}>
        <BarChart data={sorteredData}>
          <CartesianGrid vertical={false} stroke="#F5F6FB" horizontalPoints={[]} y={38} />
          <XAxis
            tick={renderCustomizedAxisTick}
            axisLine={false}
            tickLine={false}
            dataKey="name"
          >
            <Label />
          </XAxis>
          <Tooltip cursor={{ fill: 'transparent' }} />
          <Bar dataKey="price" maxBarSize={38}>
            {data.map((_, i) => (
              <Cell
                key={i}
                fill={i % 3 ? 'var(--second-accent-color)' : 'var(--accent-color)'}
                radius={[10, 10, 0, 0]}
              />
            ))}
            <LabelList
              dataKey="price"
              position="top"
              fill="var(--text-color)"
              content={renderCustomizedLabel}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
