import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface DiscordMember {
  username: string;
  avatar: string;
  status: 'online' | 'idle' | 'dnd' | 'offline';
}

export default function DiscordWidget() {
  // Симуляция данных Discord сервера
  const discordStats = {
    serverName: 'Pangaea RU',
    onlineMembers: 127,
    totalMembers: 8942,
    inviteLink: 'https://discord.gg/pangaea'
  };

  const onlineMembers: DiscordMember[] = [
    { username: 'DinoHunter_X', avatar: '🦖', status: 'online' },
    { username: 'RexKiller', avatar: '🦕', status: 'online' },
    { username: 'AlphaRaptor', avatar: '🐊', status: 'online' },
    { username: 'SurvivalPro', avatar: '🦴', status: 'idle' },
    { username: 'NightStalker', avatar: '🌙', status: 'dnd' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'idle': return 'bg-yellow-500';
      case 'dnd': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'online': return 'В сети';
      case 'idle': return 'Отошел';
      case 'dnd': return 'Не беспокоить';
      default: return 'Не в сети';
    }
  };

  return (
    <Card className="game-card border-[#5865F2]/30 bg-gradient-to-br from-[#5865F2]/5 to-transparent">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center">
            <Icon name="MessageCircle" size={20} className="text-white" />
          </div>
          <span>{discordStats.serverName}</span>
          <Badge className="bg-[#5865F2] hover:bg-[#5865F2]/90">Discord</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 rounded-lg bg-[#5865F2]/10 border border-[#5865F2]/20">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <div>
              <div className="text-2xl font-black text-green-500">{discordStats.onlineMembers}</div>
              <div className="text-xs text-muted-foreground">участников онлайн</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black">{discordStats.totalMembers}</div>
            <div className="text-xs text-muted-foreground">всего участников</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold text-muted-foreground px-1">Онлайн сейчас:</div>
          <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
            {onlineMembers.map((member, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-lg">
                      {member.avatar}
                    </div>
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 ${getStatusColor(member.status)} rounded-full border-2 border-background`}></div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{member.username}</div>
                    <div className="text-xs text-muted-foreground">{getStatusLabel(member.status)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button 
          className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold"
          onClick={() => window.open(discordStats.inviteLink, '_blank')}
        >
          <Icon name="MessageCircle" size={16} className="mr-2" />
          Присоединиться к Discord
        </Button>

        <div className="text-center text-xs text-muted-foreground">
          Общайся с игроками, получай новости и участвуй в событиях!
        </div>
      </CardContent>
    </Card>
  );
}
