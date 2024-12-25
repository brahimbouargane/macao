import { Card } from '@/components/ui';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn-card';

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
  bgColor = 'bg-red-100',
  color = 'text-red-500'
}: ModelCountWidgetProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`w-6 h-6 ${color}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${bgColor} ${color} mt-1`}
        >
          12% increase
        </div>
      </CardContent>
    </Card>
  );
}
