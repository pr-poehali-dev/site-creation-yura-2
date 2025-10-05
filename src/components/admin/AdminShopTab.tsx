import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function AdminShopTab() {
  return (
    <Card className="game-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Управление магазином</CardTitle>
          <Button size="sm" className="game-button">
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить товар
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold">Тираннозавр</h4>
                  <p className="text-sm text-muted-foreground">Динозавр - Взрослый</p>
                  <p className="text-lg font-bold text-accent mt-1">15,000 PL</p>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Icon name="Edit" size={14} className="mr-1" />
                    Изменить
                  </Button>
                  <Button size="sm" variant="outline">
                    <Icon name="Trash2" size={14} className="mr-1" />
                    Удалить
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-bold mb-4">Добавить новый товар</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Название</Label>
                  <Input placeholder="Название товара" />
                </div>
                <div className="space-y-2">
                  <Label>Цена (PL)</Label>
                  <Input type="number" placeholder="1000" />
                </div>
                <div className="space-y-2">
                  <Label>Категория</Label>
                  <select className="w-full p-2 rounded-md border bg-background">
                    <option>Динозавры</option>
                    <option>Ускорения</option>
                    <option>Корма</option>
                    <option>Таблетки</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Редкость</Label>
                  <select className="w-full p-2 rounded-md border bg-background">
                    <option>Обычный</option>
                    <option>Необычный</option>
                    <option>Редкий</option>
                    <option>Эпический</option>
                    <option>Легендарный</option>
                  </select>
                </div>
                <div className="col-span-2 space-y-2">
                  <Label>Описание</Label>
                  <Textarea placeholder="Описание товара" />
                </div>
              </div>
              <Button className="game-button mt-4">
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить товар
              </Button>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
