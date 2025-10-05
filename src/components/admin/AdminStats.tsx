import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ServerStats {
  totalPlayers: number;
  onlinePlayers: number;
  totalRevenue: number;
  activeServers: number;
  totalDinosaurs: number;
  totalTransactions: number;
}

interface AdminStatsProps {
  stats: ServerStats;
}

export default function AdminStats({ stats }: AdminStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="game-card border-primary/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Icon name="Users" size={20} />
            <span>Всего игроков</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-black text-primary">{stats.totalPlayers}</div>
          <p className="text-sm text-muted-foreground mt-1">Зарегистрировано</p>
        </CardContent>
      </Card>

      <Card className="game-card border-green-500/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Icon name="Activity" size={20} />
            <span>Онлайн сейчас</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-black text-green-500">{stats.onlinePlayers}</div>
          <p className="text-sm text-muted-foreground mt-1">Активных игроков</p>
        </CardContent>
      </Card>

      <Card className="game-card border-yellow-500/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Icon name="DollarSign" size={20} />
            <span>Доход</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-black text-yellow-500">{stats.totalRevenue.toLocaleString()} ₽</div>
          <p className="text-sm text-muted-foreground mt-1">Всего заработано</p>
        </CardContent>
      </Card>
    </div>
  );
}
