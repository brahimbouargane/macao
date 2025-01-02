import { Card } from '@/components/ui';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn-card';
import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { usePage } from '@inertiajs/react';

type ModelCountWidgetProps = {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  value: number;
  color?: string;
  bgColor?: string;
};

export default function ModelCountWidget({
  icon: Icon,
  title,
  value,
  bgColor = 'bg-primary/10',
  color = 'text-red-500'
}: ModelCountWidgetProps) {
  const t = usePage<PagePropsData>().props.translations;
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`w-8 h-8 ${color}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div
          className={`inline-flex items-center rounded-full px-2.5 -ml-2.5 py-0.5 text-sm font-semibold ${bgColor} ${color} mt-1`}
        >
          12% {__(t, 'Increase')}
        </div>
      </CardContent>
    </Card>
  );
}
