import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Group A', value: 400, colour: 'red' },
  { name: 'Group B', value: 300, colour: 'violet' },
  { name: 'Group C', value: 300, colour: 'orange' },
  { name: 'Group D', value: 200, colour: 'blue' },
  { name: 'Group T', value: 400, colour: 'yellow' },
  { name: 'Group V', value: 300, colour: 'green' },
  { name: 'Group S', value: 300, colour: 'gray' },
];

const renderActiveShape = (props) => {
  const {
    cx, cy, innerRadius, outerRadius, startAngle, endAngle,
    fill,
  } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 17}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export default class DonutChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  onPieLeave = () => {
    this.setState({
      activeIndex: null,
    });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <ResponsiveContainer width="65%" height={264}>
        <PieChart>
          <defs>
            <linearGradient id="color-green" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22A380" stopOpacity={1} />
              <stop offset="100%" stopColor="#A9E0AA" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="color-red" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F54663" stopOpacity={1} />
              <stop offset="100%" stopColor="#FFBAAC" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="color-violet" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A751B8" stopOpacity={1} />
              <stop offset="100%" stopColor="#FE98AA" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="color-orange" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F57859" stopOpacity={1} />
              <stop offset="100%" stopColor="#FFCF98" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="color-yellow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E9BB17" stopOpacity={1} />
              <stop offset="100%" stopColor="#FFEEB2" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="color-blue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5C77FF" stopOpacity={1} />
              <stop offset="100%" stopColor="#98CEFF" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="color-gray" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7B7B7B" stopOpacity={1} />
              <stop offset="100%" stopColor="#B7B7B7" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            innerRadius={70}
            outerRadius={115}
            dataKey="value"
            blendStroke
            onMouseEnter={this.onPieEnter}
            onMouseLeave={this.onPieLeave}
          >
            {
            data.map((entry) => (
              <Cell key={`cell-${entry.name}`} fill={`url(#color-${entry.colour})`} />
            ))
          }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
