import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Clan {
  id: number;
  name: string;
  tag: string;
  leader: string;
  members: number;
  maxMembers: number;
  level: number;
  description: string;
  icon: string;
  color: string;
  territory: string;
  founded: string;
}

interface ClanInfoTabProps {
  clan: Clan;
}

export default function ClanInfoTab({ clan }: ClanInfoTabProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>О клане</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Описание</h3>
            <p className="text-muted-foreground">{clan.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Территория</h3>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span>{clan.territory}</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Дата основания</h3>
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} className="text-primary" />
                <span>{clan.founded}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Рейтинг клана</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary mb-2">#1</div>
            <p className="text-sm text-muted-foreground">Первое место в рейтинге</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Общие убийства</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-destructive mb-2">2,547</div>
            <p className="text-sm text-muted-foreground">За всё время</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Казна клана</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-accent mb-2">45,000 🪙</div>
            <p className="text-sm text-muted-foreground">Доступно для развития</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}