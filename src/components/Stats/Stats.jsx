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
            }}
            // padding={{ top: 80 }}
            tickMargin={32}
          />
          {/* <Tooltip /> */}
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
