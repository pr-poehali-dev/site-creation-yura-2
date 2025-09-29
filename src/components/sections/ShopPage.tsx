import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ShopItem {
  id: number;
  name: string;
  price: number;
  category: string;
  rarity: string;
}

interface ShopPageProps {
  shopItems: ShopItem[];
  getRarityColor: (rarity: string) => string;
}

export default function ShopPage({ shopItems, getRarityColor }: ShopPageProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">🛒 Игровой магазин</h2>
        <p className="text-muted-foreground">Покупайте предметы для выживания</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shopItems.map((item) => (
          <Card key={item.id} className="hover:bg-card/80 transition-colors">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <Badge className={getRarityColor(item.rarity)}>{item.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-accent">{item.price} 🪙</span>
                <Button variant="secondary" size="sm">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}