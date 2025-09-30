import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ClanMember {
  id: number;
  name: string;
  rank: string;
  level: number;
  contribution: number;
  status: string;
  joinedDate: string;
}

interface ClanMembersTabProps {
  members: ClanMember[];
}

export default function ClanMembersTab({ members }: ClanMembersTabProps) {
  const getRankColor = (rank: string) => {
    switch (rank) {
      case 'Лидер': return 'text-yellow-400';
      case 'Офицер': return 'text-orange-400';
      case 'Ветеран': return 'text-purple-400';
      case 'Боец': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'В сети': return 'bg-green-500';
      case 'В игре': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Участники клана ({members.length})</CardTitle>
        <CardDescription>Список всех членов клана с их статистикой</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {members.map((member) => (
            <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(member.status)}`} />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{member.name}</span>
                    <Badge variant="outline" className={getRankColor(member.rank)}>
                      {member.rank}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Уровень {member.level} • Вступил: {member.joinedDate}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-primary">{member.contribution.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Вклад в клан</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}