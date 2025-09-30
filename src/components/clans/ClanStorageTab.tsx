import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  icon: string;
}

interface ClanStorageTabProps {
  inventory: InventoryItem[];
}

export default function ClanStorageTab({ inventory }: ClanStorageTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Хранилище клана</CardTitle>
        <CardDescription>Общие ресурсы доступные всем членам клана</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {inventory.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4 text-center">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-2xl font-bold text-primary mt-2">{item.quantity}</div>
                <Button size="sm" className="w-full mt-3">
                  <Icon name="Download" size={14} className="mr-1" />
                  Взять
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}