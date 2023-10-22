import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from 'recharts';
import { StatsContainer, StatsPageBox } from './Stats.styled';

const data = [
  {
    name: 'To Do',
    'By Day': 35,
    'By Month': 24,
  },
  {
    name: 'In Progress',
    'By Day': 40,
    'By Month': 24,
  },
  {
    name: 'Done',
    'By Day': 40,
    'By Month': 24,
  },
];

export default function App() {
  return (
    <StatsPageBox>
      <button>Calendar</button>

      <StatsContainer>
        <BarChart
          width={780}
          height={440}
          data={data}
          margin={{ top: 40, right: 40, left: 40, bottom: 40 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            domain={[0, 100]}
            tickCount={6}
            axisLine={false}
            tickLine={false}
            label={{ value: 'Tasks', position: 'top' }}
            padding={{ top: 80 }}
            tickMargin={50}
          />
          <Tooltip />
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="end"
            iconSize={8}
            iconType="circle"
            markerWidth={5}
          />
          <Bar dataKey="By Day" fill="#FFD2DD" barSize={27} radius={10}>
            <LabelList dataKey="By Day" position="insideTop" />
          </Bar>
          <Bar dataKey="By Month" fill="#3E85F3" barSize={27} radius={10}>
            <LabelList dataKey="By Month" position="insideTop" />
          </Bar>
        </BarChart>
      </StatsContainer>
    </StatsPageBox>
  );
}
