'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Start', before: 20, after: 25 },   // <- Label "Before" here
  { name: 'Mid1', before: 25, after: 45 },
  { name: 'Mid2', before: 28, after: 60 },    // <- Label "After" here
  { name: 'End', before: 30, after: 55 },
];

export default function GradientChart() {
  return (
    <div className="w-full h-50 rounded-2xl bg-transparent">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00FF66" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#000" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFA500" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#000" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          {/* Axes (hidden for design match) */}
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip />

          {/* Orange Line (Before) */}
          <Area
            type="monotone"
            dataKey="before"
            stroke="#FFA500"
            strokeWidth={2}
            fill="url(#orangeGradient)"
            dot={({ cx, cy, index }) =>
              index === 0 ? (
                <g>
                  <circle cx={cx} cy={cy} r={5} fill="white" stroke="#FFA500" strokeWidth={2} />
                  <foreignObject x={cx - 30} y={cy - 40} width={60} height={30}>
                    <div
                      className="text-xs bg-gray-700 text-white px-2 py-1 rounded shadow text-center"
                      xmlns="http://www.w3.org/1999/xhtml"
                    >
                      Before
                    </div>
                  </foreignObject>
                </g>
              ) : (
                <circle cx={cx} cy={cy} r={0} />
              )
            }
          />

          {/* Green Line (After) */}
          <Area
            type="monotone"
            dataKey="after"
            stroke="#00FF66"
            strokeWidth={2}
            fill="url(#greenGradient)"
            dot={({ cx, cy, index }) =>
              index === 2 ? (
                <g>
                  <circle cx={cx} cy={cy} r={5} fill="white" stroke="#00FF66" strokeWidth={2} />
                  <foreignObject x={cx - 25} y={cy - 40} width={60} height={30}>
                    <div
                      className="text-xs bg-gray-700 text-white px-2 py-1 rounded shadow text-center"
                      xmlns="http://www.w3.org/1999/xhtml"
                    >
                      After
                    </div>
                  </foreignObject>
                </g>
              ) : (
                <circle cx={cx} cy={cy} r={0} />
              )
            }
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
