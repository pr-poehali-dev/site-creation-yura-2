import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

interface ClanHeaderProps {
  clan: Clan;
}

export default function ClanHeader({ clan }: ClanHeaderProps) {
  return (
    <Card className={`bg-gradient-to-r ${clan.color}`}>
      <CardContent className="p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-6xl">{clan.icon}</div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-3xl font-bold">{clan.name}</h2>
                <Badge variant="secondary" className="text-lg">[{clan.tag}]</Badge>
              </div>
              <p className="text-white/80 mt-1">Лидер: {clan.leader}</p>
              <p className="text-white/80">Основан: {clan.founded}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">Уровень {clan.level}</div>
            <div className="text-white/80 mt-2">
              Участники: {clan.members}/{clan.maxMembers}
            </div>
            <Button className="mt-4" variant="secondary">
              <Icon name="UserPlus" size={16} className="mr-2" />
              Подать заявку
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}