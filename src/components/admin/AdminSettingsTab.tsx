import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface AdminSettingsTabProps {
  onAddLog: (action: string, target: string, details: string, type: 'settings') => void;
}

export default function AdminSettingsTab({ onAddLog }: AdminSettingsTabProps) {
  return (
    <Card className="game-card">
      <CardHeader>
        <CardTitle>Глобальные настройки</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h4 className="font-bold">Экономика</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Стоимость вращения колеса (ОА)</Label>
              <Input type="number" defaultValue={100} />
            </div>
            <div className="space-y-2">
              <Label>ОА за час онлайна</Label>
              <Input type="number" defaultValue={5} />
            </div>
            <div className="space-y-2">
              <Label>ОА за час (Премиум)</Label>
              <Input type="number" defaultValue={10} />
            </div>
            <div className="space-y-2">
              <Label>Бонус опыта (Премиум %)</Label>
              <Input type="number" defaultValue={100} />
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <h4 className="font-bold">Техническое обслуживание</h4>
          <div className="flex items-center justify-between p-4 rounded-lg border">
            <div>
              <h5 className="font-semibold">Режим технических работ</h5>
              <p className="text-sm text-muted-foreground">Закрывает доступ к серверам для обычных игроков</p>
            </div>
            <Button variant="destructive">
              <Icon name="AlertTriangle" size={16} className="mr-2" />
              Включить
            </Button>
          </div>
        </div>

        <Button className="game-button" onClick={() => onAddLog('Изменены настройки', 'Глобальные настройки', 'Обновлены параметры экономики', 'settings')}>
          <Icon name="Save" size={16} className="mr-2" />
          Сохранить настройки
        </Button>
      </CardContent>
    </Card>
  );
}
