import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface ShopItem {
  id: number;
  name: string;
  price: number;
  category: string;
  description?: string;
  image?: string;
  growthStage?: string;
}

interface ShopPageProps {
  shopItems: ShopItem[];
  getRarityColor: (rarity: string) => string;
}

export default function ShopPage({ shopItems, getRarityColor }: ShopPageProps) {
  const [activeCategory, setActiveCategory] = useState('dinosaurs');

  const dinosaurs = [
    { id: 1, name: 'Тираннозавр', price: 15000, growthStage: 'Взрослый', description: 'Король хищников' },
    { id: 2, name: 'Велоцираптор', price: 8000, growthStage: 'Взрослый', description: 'Быстрый и смертоносный' },
    { id: 3, name: 'Трицератопс', price: 12000, growthStage: 'Взрослый', description: 'Мощный травоядный' },
    { id: 4, name: 'Карнотавр', price: 10000, growthStage: 'Взрослый', description: 'Агрессивный хищник' },
    { id: 5, name: 'Спинозавр', price: 16000, growthStage: 'Взрослый', description: 'Речной охотник' },
    { id: 6, name: 'Птеранодон', price: 7000, growthStage: 'Взрослый', description: 'Летающий ящер' },
    { id: 7, name: 'Аллозавр', price: 11000, growthStage: 'Суб-взрослый', description: 'Стайный хищник' },
    { id: 8, name: 'Анкилозавр', price: 9000, growthStage: 'Взрослый', description: 'Живая крепость' },
  ];

  const boosts = [
    { id: 11, name: 'Ускорение роста x2', price: 500, description: 'Удваивает скорость роста на 24 часа', icon: 'Zap' },
    { id: 12, name: 'Ускорение роста x3', price: 1000, description: 'Утраивает скорость роста на 24 часа', icon: 'Zap' },
    { id: 13, name: 'Ускорение роста x5', price: 2000, description: 'Ускоряет рост в 5 раз на 24 часа', icon: 'Zap' },
    { id: 14, name: 'Буст опыта +50%', price: 400, description: 'Дополнительный опыт на 12 часов', icon: 'TrendingUp' },
    { id: 15, name: 'Буст опыта +100%', price: 750, description: 'Двойной опыт на 12 часов', icon: 'TrendingUp' },
    { id: 16, name: 'Премиум статус 7 дней', price: 1500, description: 'Все бусты активны', icon: 'Star' },
    { id: 17, name: 'Премиум статус 30 дней', price: 5000, description: 'Все бусты активны месяц', icon: 'Star' },
  ];

  const food = [
    { id: 21, name: 'Мясо хищника', price: 150, description: 'Восстанавливает 30% голода', icon: 'Beef' },
    { id: 22, name: 'Рыба', price: 100, description: 'Восстанавливает 20% голода', icon: 'Fish' },
    { id: 23, name: 'Ягоды', price: 80, description: 'Восстанавливает 15% голода травоядным', icon: 'Apple' },
    { id: 24, name: 'Травы', price: 60, description: 'Восстанавливает 10% голода травоядным', icon: 'Leaf' },
    { id: 25, name: 'Яйцо', price: 200, description: 'Восстанавливает 40% голода', icon: 'Egg' },
    { id: 26, name: 'Туша крупного динозавра', price: 500, description: 'Восстанавливает 100% голода', icon: 'Beef' },
  ];

  const pills = [
    { id: 31, name: 'Лечебная таблетка', price: 300, description: 'Восстанавливает 50% здоровья', icon: 'Heart' },
    { id: 32, name: 'Антибиотик', price: 450, description: 'Лечит инфекции и яды', icon: 'Pill' },
    { id: 33, name: 'Стимулятор', price: 250, description: 'Увеличивает скорость на 30 минут', icon: 'Zap' },
    { id: 34, name: 'Регенерация', price: 600, description: 'Постепенно восстанавливает здоровье', icon: 'HeartPulse' },
    { id: 35, name: 'Антидот', price: 400, description: 'Снимает эффекты отравления', icon: 'ShieldPlus' },
    { id: 36, name: 'Витамины', price: 200, description: 'Увеличивает максимальное здоровье', icon: 'Sparkles' },
  ];

  const renderItems = (items: any[], showGrowthStage = false) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <Card key={item.id} className="game-card hover:scale-105 transition-all duration-300">
          <CardHeader>
            <div className="flex justify-between items-start mb-2">
              <CardTitle className="text-lg font-bold">{item.name}</CardTitle>
              {item.icon && (
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name={item.icon} size={20} className="text-primary" />
                </div>
              )}
            </div>
            {showGrowthStage && item.growthStage && (
              <Badge className="w-fit bg-secondary/50">{item.growthStage}</Badge>
            )}
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{item.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-black text-accent">{item.price}</span>
                <span className="text-sm text-muted-foreground">PL</span>
              </div>
              <Button size="sm" className="game-button">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Купить
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-5xl font-black glow-text">🛒 ДиноШоп</h2>
        <p className="text-xl text-muted-foreground">Покупайте динозавров, ускорения и предметы</p>
        <div className="flex items-center justify-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <Icon name="Coins" size={18} className="text-accent" />
            <span className="text-muted-foreground">Баланс:</span>
            <span className="font-bold text-accent">12,450 PL</span>
          </div>
        </div>
      </div>

      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="dinosaurs" className="text-base">
            <span className="mr-2">🦖</span>
            Динозавры
          </TabsTrigger>
          <TabsTrigger value="boosts" className="text-base">
            <span className="mr-2">⚡</span>
            Ускорения
          </TabsTrigger>
          <TabsTrigger value="food" className="text-base">
            <span className="mr-2">🍖</span>
            Корма
          </TabsTrigger>
          <TabsTrigger value="pills" className="text-base">
            <span className="mr-2">💊</span>
            Таблетки
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dinosaurs" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Динозавры</h3>
            <Badge variant="outline" className="text-sm">
              {dinosaurs.length} доступно
            </Badge>
          </div>
          {renderItems(dinosaurs, true)}
        </TabsContent>

        <TabsContent value="boosts" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Ускорения и бусты</h3>
            <Badge variant="outline" className="text-sm">
              {boosts.length} доступно
            </Badge>
          </div>
          {renderItems(boosts)}
        </TabsContent>

        <TabsContent value="food" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Корма</h3>
            <Badge variant="outline" className="text-sm">
              {food.length} доступно
            </Badge>
          </div>
          {renderItems(food)}
        </TabsContent>

        <TabsContent value="pills" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Таблетки и препараты</h3>
            <Badge variant="outline" className="text-sm">
              {pills.length} доступно
            </Badge>
          </div>
          {renderItems(pills)}
        </TabsContent>
      </Tabs>
    </div>
  );
}