import chartData from '../data/chartData.json';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import {
  CssIcon,
  HtmlIcon,
  JsIcon,
  NodejsIcon,
  ReactIcon,
  TailwindCssIcon,
} from './Icons';

interface LabelProps {
  payload: {
    name: string;
    percent: number;
    type: number; // Add other properties as needed
    value: string;
  };
  x: number;
  y: number;
  width: number;
  height: number;
  value: number;
  name: string;
  index: number;
}

const renderXAxisTick = ({ x, y, payload }: LabelProps) => {
  const xDistance = 55;
  const yDistance = 20;
  const iconSize = 45;
  function selectIcon() {
    switch (payload.value) {
      case 'HTML':
        return (
          <svg
            x={x - xDistance}
            y={y - yDistance}
            width={iconSize}
            height={iconSize}
          >
            <HtmlIcon />
          </svg>
        );

      case 'CSS':
        return (
          <svg
            x={x - xDistance}
            y={y - yDistance}
            width={iconSize}
            height={iconSize}
          >
            <CssIcon />
          </svg>
        );
      case 'JavaScript':
        return (
          <svg
            x={x - xDistance}
            y={y - yDistance}
            width={iconSize}
            height={iconSize}
          >
            <JsIcon />
          </svg>
        );
      case 'Tailwind':
        return (
          <svg
            x={x - xDistance}
            y={y - yDistance}
            width={iconSize}
            height={iconSize}
          >
            <TailwindCssIcon />
          </svg>
        );
      case 'React':
        return (
          <svg
            x={x - xDistance}
            y={y - yDistance}
            width={iconSize}
            height={iconSize}
          >
            <ReactIcon />
          </svg>
        );
      case 'Nodejs':
        return (
          <svg
            x={x - xDistance}
            y={y - yDistance}
            width={iconSize}
            height={iconSize}
          >
            <NodejsIcon />
          </svg>
        );
      default:
        return <svg />;
    }
  }
  return selectIcon();
};

const renderYAxisTick = ({ x, y, index }: LabelProps) => {
  const xDistance = -30;
  const yDistance = 10;
  function selectIcon() {
    return (
      <text
        x={x + xDistance - 8}
        y={y + yDistance}
        fill={`#fff`}
        className="fill-teal-400"
        textAnchor="center"
        dy={4}
      >
        {chartData.levels[index]}
      </text>
    );
  }
  return selectIcon();
};
const renderCustomBarLabel = ({
  x,
  y,
  width,
  height,
  name,
  index,
}: LabelProps) => {
  const barColor = chartData.colors[chartData.skills[index].type] || '#fff';

  return (
    <text
      x={x + width + 10}
      y={y + height / 2}
      fill={barColor}
      textAnchor="start"
      dy={4}
    >
      {name}
    </text>
  );
};

export default function SkillChart() {
  return (
    <div className="best_skills">
      <ResponsiveContainer width="100%" height={450}>
        <BarChart
          data={chartData.skills}
          layout="vertical"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis type="number" tick={renderYAxisTick} />
          <YAxis type="category" dataKey="name" tick={renderXAxisTick} />
          <Bar
            dataKey="percent"
            unit="%"
            barSize={35}
            label={renderCustomBarLabel}
          >
            {chartData.skills.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={chartData.colors[entry.type]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
