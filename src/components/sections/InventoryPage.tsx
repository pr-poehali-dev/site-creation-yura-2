import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  category: string;
  rarity: string;
  description: string;
}

interface InventoryPageProps {
  inventoryItems: InventoryItem[];
  getRarityColor: (rarity: string) => string;
}

export default function InventoryPage({ inventoryItems, getRarityColor }: InventoryPageProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">🎒 Инвентарь</h2>
        <p className="text-muted-foreground">Управляйте своими предметами и ресурсами</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Inventory Grid */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Package2" size={20} />
                <span>Предметы ({inventoryItems.length}/50)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {inventoryItems.map((item) => (
                  <Card key={item.id} className="hover:bg-card/80 transition-colors cursor-pointer">
                    <CardContent className="p-4">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 mx-auto bg-muted rounded-lg flex items-center justify-center text-2xl">
                          {item.category === 'Еда' && '🥩'}
                          {item.category === 'Размножение' && '🥚'}
                          {item.category === 'Крафт' && '🔨'}
                          {item.category === 'Медицина' && '🌿'}
                          {item.category === 'Напитки' && '💧'}
                          {item.category === 'Оружие' && '⚔️'}
                        </div>
                        <div className="text-sm font-medium">{item.name}</div>
                        <Badge className={getRarityColor(item.rarity)} variant="secondary">
                          x{item.quantity}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inventory Stats & Actions */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📊 Статистика</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span>Слоты занято:</span>
                <span className="font-bold">28/50</span>
              </div>
              <Progress value={56} className="h-2" />
              <div className="flex justify-between">
                <span>Общий вес:</span>
                <span className="font-bold">142кг</span>
              </div>
              <div className="flex justify-between">
                <span>Стоимость:</span>
                <span className="font-bold text-accent">12,450 🪙</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">⚡ Быстрые действия</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                <Icon name="Trash2" size={14} className="mr-2" />
                Выбросить все
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <Icon name="ArrowUpDown" size={14} className="mr-2" />
                Сортировать
              </Button>
              <Button variant="secondary" size="sm" className="w-full">
                <Icon name="ShoppingCart" size={14} className="mr-2" />
                Продать все
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🏷️ Фильтры</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                🥩 Еда
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                🔨 Крафт
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                🌿 Медицина
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                ⚔️ Оружие
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}