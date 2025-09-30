import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
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

interface ClanCardProps {
  clan: Clan;
  onClick: () => void;
}

export default function ClanCard({ clan, onClick }: ClanCardProps) {
  return (
    <Card 
      className="hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className={`bg-gradient-to-r ${clan.color} text-white`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-4xl">{clan.icon}</div>
            <div>
              <CardTitle className="text-xl">{clan.name}</CardTitle>
              <CardDescription className="text-white/80">[{clan.tag}]</CardDescription>
            </div>
          </div>
          <Badge variant="secondary" className="text-lg">
            Ур. {clan.level}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <p className="text-sm text-muted-foreground line-clamp-2">{clan.description}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground">Лидер</div>
            <div className="font-semibold">{clan.leader}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Территория</div>
            <div className="font-semibold">{clan.territory}</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Участники</span>
            <span className="font-semibold">{clan.members}/{clan.maxMembers}</span>
          </div>
          <Progress value={(clan.members / clan.maxMembers) * 100} />
        </div>

        <Button className="w-full">
          <Icon name="Eye" size={16} className="mr-2" />
          Подробнее
        </Button>
      </CardContent>
    </Card>
  );
}