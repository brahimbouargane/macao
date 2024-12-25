import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { usePage } from '@inertiajs/react';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from 'ui';
import { CategoryProductsCount } from '..';

type CategoryDistributionPieChartProps = {
  productsCountByCategory: CategoryProductsCount[];
};

export function CategoryDistributionPieChart({ productsCountByCategory }: CategoryDistributionPieChartProps) {
  const translations = usePage<PagePropsData>().props.translations;

  const totalProducts = productsCountByCategory.reduce((p, c) => p + c.products_count, 0);
  // Convert productsCountByCategory into the format needed for Pie chart (name and value)
  const pieData = productsCountByCategory.map((item, index) => ({
    name: item.name,
    value: item.products_count,
    fill: `var(--chart-${index + 1})`,
    percentage: ((item.products_count / totalProducts) * 100).toFixed(2)
  }));

  return (
    <Card className="w-full h-full bg-bg">
      <Card.Header>
        <Card.Title>{__(translations, 'Category Distribution by Product Percentage')}</Card.Title>
        {/* <Card.Description>{__(translations, 'Top 10 categories by product count')}</Card.Description> */}
      </Card.Header>
      <Card.Content className="pb-0 h-96">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip content={CustomToolTip} />
            <Legend content={CustomLegend} />

            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={100} // Radius of the outer circle
              cornerRadius={0} // Make the segments rounded
              paddingAngle={1} // Space between segments
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    className="dark:fill-white"
                  >
                    {payload.percentage} %
                  </text>
                );
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </Card.Content>
    </Card>
  );
}

// CUSTOM TOOLTIP
const CustomToolTip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="grid min-w-[12rem] items-start gap-1.5 rounded-lg border bg-accent px-2 py-2 text-overlay-fg text-md shadow-xl">
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2">
            <span
              className="size-[9px] rounded-[2px] inline-block"
              style={{ backgroundColor: payload[0].payload.fill }}
            ></span>
            <span className="opacity-60">{payload[0].name}</span>
          </div>
          <span>{payload[0].payload.value}</span>
        </div>
      </div>
    );
  }
};

// CUSTOM LEGEND

const CustomLegend = ({ payload }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-2 max-md:mt-4">
      {payload.map((entry, index) => {
        return (
          <div key={index} className="flex items-center">
            {/* Custom color box */}
            <span
              className="size-[9px] rounded-[2px] inline-block"
              style={{ backgroundColor: entry.payload.fill }}
            ></span>
            {/* Custom legend text */}
            <span className="ml-2 md:text-md">{entry.payload.name}</span>
          </div>
        );
      })}
    </div>
  );
};
