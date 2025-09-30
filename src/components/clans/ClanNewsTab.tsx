import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface NewsItem {
  id: number;
  title: string;
  text: string;
  date: string;
  icon: string;
}

interface ClanNewsTabProps {
  news: NewsItem[];
}

export default function ClanNewsTab({ news }: ClanNewsTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Новости клана</CardTitle>
        <CardDescription>Последние события и достижения</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {news.map((item) => (
          <div key={item.id} className="flex items-start space-x-4 p-4 border rounded-lg">
            <div className="text-3xl">{item.icon}</div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.text}</p>
              <div className="text-xs text-muted-foreground flex items-center">
                <Icon name="Clock" size={12} className="mr-1" />
                {item.date}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}