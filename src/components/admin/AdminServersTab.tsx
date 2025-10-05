import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const servers = [
  { name: 'EU-1 Survival', status: 'online', players: 245, max: 300 },
  { name: 'NA-1 Hardcore', status: 'online', players: 189, max: 200 },
  { name: 'RU-1 Classic', status: 'maintenance', players: 0, max: 400 },
];

export default function AdminServersTab() {
  return (
    <Card className="game-card">
      <CardHeader>
        <CardTitle>Управление серверами</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {servers.map((server, index) => (
            <Card key={index} className={server.status === 'maintenance' ? 'border-orange-500/50' : ''}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${server.status === 'online' ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`}></div>
                      <h4 className="font-bold">{server.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Игроков: {server.players}/{server.max}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Icon name="Settings" size={14} className="mr-1" />
                      Настройки
                    </Button>
                    <Button size="sm" variant={server.status === 'online' ? 'destructive' : 'default'}>
                      <Icon name={server.status === 'online' ? 'Power' : 'Play'} size={14} className="mr-1" />
                      {server.status === 'online' ? 'Остановить' : 'Запустить'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
