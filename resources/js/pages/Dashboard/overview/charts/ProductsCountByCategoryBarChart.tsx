import { Card } from 'ui';
import { CategoryProductsCount } from '..';

import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { usePage } from '@inertiajs/react';
import { Bar, BarChart, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type ProductsCountByCategoryBarChartProps = {
  productsCountByCategory: CategoryProductsCount[];
};

export function ProductsCountByCategoryBarChart({ productsCountByCategory }: ProductsCountByCategoryBarChartProps) {
  const translations = usePage<PagePropsData>().props.translations;
  return (
    <Card className="w-full h-full bg-bg">
      <Card.Header>
        <Card.Title>{__(translations, 'Categories by products count')}</Card.Title>
        <Card.Description>{__(translations, 'Top 10 categories by product count')}</Card.Description>
      </Card.Header>
      <Card.Content className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" height={100} data={productsCountByCategory} margin={{ right: 0, left: 10 }}>
            {/* <CartesianGrid strokeDasharray="4 4" /> */}
            <Legend />
            <Tooltip content={CustomToolTip} />

            <YAxis dataKey="name" type="category" hide />
            <XAxis type="number" hide />
            <Bar
              isAnimationActive={true}
              dataKey="products_count"
              type="monotone"
              fill="#FE0002"
              background={{ radius: 6, fill: 'var(--chart-1)', opacity: 0.2 }}
              radius={5}
              name={__(translations, 'Products Count')}
              shape={(props: any) => {
                return (
                  <>
                    <Rectangle {...props} />
                    <text x={props.x + 10} y={props.y + 18} fill="white">
                      {props.name}
                    </text>
                    <text x={props.background.width - 20} y={props.y + 15} className="text-lg dark:fill-white ">
                      {props.products_count.toLocaleString()}
                    </text>
                  </>
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </Card.Content>
    </Card>
  );
}

const CustomToolTip = ({ active, payload, label }) => {
  const translations = usePage<PagePropsData>().props.translations;

  if (active && payload && payload.length) {
    return (
      <div className="grid min-w-[12rem] items-start gap-1.5 rounded-lg border bg-accent px-3 py-2 text-overlay-fg text-md shadow-xl">
        <p className="">{label}</p>
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2">
            <span className="size-[9px] rounded-[2px] bg-[#FE0002]"></span>
            <span className="opacity-60">{__(translations, 'Products Count')}</span>
          </div>
          <span>{payload[0].payload.products_count}</span>
        </div>
      </div>
    );
  }
};
