import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LabelList,
} from 'recharts';
import { StatsContainer, StatsPageBox } from './Stats.styled';

const data = [
  {
    name:'To Do',
    'By Day': 75,
    'By Month': 44,
  },
  {
    name:'In Progress',
    'By Day': 60,
    'By Month': 64,
  },
  {
    name:'Done',
    'By Day': 60,
    'By Month': 44,
  },
];

export default function App() {
  return (
    <StatsPageBox>
      <StatsContainer>
        <BarChart
          width={640}
          height={424}
          data={data}
          margin={{ top: 77, right: 32, left: 32, bottom: 60 }}
        >
          <CartesianGrid vertical={false} stroke="#E3F3FF" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            fontSize={14}
            fontFamily="Inter"
            tickMargin={20}
          />
          <YAxis
            domain={[0, 100]}
            tickCount={6}
            axisLine={false}
            tickLine={false}
            label={{
              value: 'Tasks',
              position: 'top',
              dx: -14,
              dy: -24,
              fontFamily: 'Inter',
              fontSize: 14,
              fontWeight: 600,
              fill: '#343434',
            }}
            tickMargin={32}
            fontFamily="Inter"
            fontSize={14}
          />
          <Legend
            wrapperStyle={{ position: 'absolute', top: -50 }}
            layout="horizontal"
            verticalAlign="top"
            align="end"
            iconSize={8}
            iconType="circle"
            markerWidth={5}
            fontSize={16}
          />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="1" x2="0" y2="0.2">
              <stop offset="30%" stopColor="#FFD2DD" stopOpacity={1} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="colorXv" x1="0" y1="1" x2="0" y2="0.2">
              <stop offset="30%" stopColor="#3E85F3" stopOpacity={1} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <Bar dataKey="By Day" fill="url(#colorUv)" barSize={27} radius={10}>
            <LabelList
              dataKey="By Day"
              position="insideTop"
              fill="#343434"
              style={{ fontWeight: 500 }}
            />
          </Bar>
          <Bar dataKey="By Month" fill="url(#colorXv)" barSize={27} radius={10}>
            <LabelList
              dataKey="By Month"
              position="insideTop"
              fill="#343434"
              style={{ fontWeight: 500 }}
            />
          </Bar>
        </BarChart>
      </StatsContainer>
    </StatsPageBox>
  );
}
