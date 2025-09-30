import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ClanMember {
  id: number;
  name: string;
  rank: string;
  level: number;
  contribution: number;
  status: string;
  joinedDate: string;
}

interface ClanActivityTabProps {
  members: ClanMember[];
}

export default function ClanActivityTab({ members }: ClanActivityTabProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Онлайн участников</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">
                {members.filter(m => m.status === 'В сети' || m.status === 'В игре').length}
              </div>
              <p className="text-muted-foreground">из {members.length} участников</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Активность за неделю</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">94%</div>
              <p className="text-muted-foreground">Средняя активность</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Последняя активность</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="Sword" size={20} className="text-destructive" />
              <div>
                <div className="font-semibold">DinoHunter_X убил Карнотавра</div>
                <div className="text-sm text-muted-foreground">5 минут назад</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="Download" size={20} className="text-primary" />
              <div>
                <div className="font-semibold">RaptorKing взял мясо из хранилища</div>
                <div className="text-sm text-muted-foreground">15 минут назад</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="Trophy" size={20} className="text-accent" />
              <div>
                <div className="font-semibold">Клан выполнил задание "Групповая охота"</div>
                <div className="text-sm text-muted-foreground">1 час назад</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}