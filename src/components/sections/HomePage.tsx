import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import DiscordWidget from '@/components/ui/DiscordWidget';

interface TopPlayer {
  name: string;
  clan: string;
  score: number;
}

interface HomePageProps {
  topPlayers: TopPlayer[];
}

export default function HomePage({ topPlayers }: HomePageProps) {
  const servers = [
    { name: 'EU-1 Survival', players: 245, max: 300, status: 'online', ping: 23 },
    { name: 'NA-1 Hardcore', players: 189, max: 200, status: 'online', ping: 45 },
    { name: 'RU-1 Classic', players: 312, max: 400, status: 'online', ping: 12 },
    { name: 'ASIA-1 PvP', players: 156, max: 250, status: 'online', ping: 78 }
  ];

  const news = [
    {
      title: 'Обновление 2.5: Новые динозавры',
      date: '25 сентября 2024',
      image: '/img/679e1631-55d7-426e-9745-48338a3ee7ee.jpg',
      tag: 'Обновление'
    },
    {
      title: 'Клановые войны: Сезон 3',
      date: '20 сентября 2024',
      image: '/img/679e1631-55d7-426e-9745-48338a3ee7ee.jpg',
      tag: 'События'
    },
    {
      title: 'Гайд: Как выжить первую ночь',
      date: '15 сентября 2024',
      image: '/img/679e1631-55d7-426e-9745-48338a3ee7ee.jpg',
      tag: 'Гайд'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="relative h-[500px] rounded-2xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90"></div>
        <img 
          src="https://cdn.poehali.dev/files/afcbce9b-3f90-44bc-8705-a8ac72b77323.png" 
          alt="Pangaea" 
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center text-left space-y-6 px-4 pl-16">
          <h1 className="text-7xl font-black tracking-wider drop-shadow-2xl bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            PANGAEA
          </h1>
          <p className="text-2xl text-gray-200 max-w-2xl font-medium">
            Погрузитесь в мир доисторических существ. Выживайте, охотьтесь, доминируйте.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground font-medium">Онлайн</div>
              <div className="text-4xl font-black glow-text">1,247</div>
            </div>
            <Icon name="Users" size={48} className="text-primary opacity-50" />
          </div>
        </div>

        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground font-medium">Серверов</div>
              <div className="text-4xl font-black glow-text">12</div>
            </div>
            <Icon name="Server" size={48} className="text-secondary opacity-50" />
          </div>
        </div>

        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground font-medium">Динозавров</div>
              <div className="text-4xl font-black glow-text">47</div>
            </div>
            <div className="text-5xl opacity-50">🦕</div>
          </div>
        </div>

        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground font-medium">Кланов</div>
              <div className="text-4xl font-black glow-text">284</div>
            </div>
            <Icon name="Shield" size={48} className="text-accent opacity-50" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-black">📰 Последние новости</h2>
            <Button variant="outline" size="sm">
              Все новости
              <Icon name="ArrowRight" size={14} className="ml-2" />
            </Button>
          </div>

          <div className="space-y-4">
            {news.map((item, index) => (
              <Card key={index} className="game-card">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
                        {item.tag}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.date}
                      </p>
                    </div>
                    <Button variant="outline" className="w-fit">
                      Читать далее
                      <Icon name="ArrowRight" size={14} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <DiscordWidget />
          
          <div>
            <h2 className="text-3xl font-black mb-6">🌍 Серверы</h2>
            <div className="space-y-3">
              {servers.map((server, index) => (
                <Card key={index} className="game-card">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="font-bold">{server.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {server.ping}ms
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Игроков</span>
                        <span className="font-semibold">{server.players}/{server.max}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all"
                          style={{ width: `${(server.players / server.max) * 100}%` }}
                        ></div>
                      </div>
                      <Button size="sm" className="w-full game-button">
                        <Icon name="LogIn" size={14} className="mr-2" />
                        Подключиться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="game-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Trophy" size={20} className="text-yellow-500" />
                <span>Топ игроков</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {topPlayers.map((player, index) => (
                <div key={player.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      index === 0 ? 'bg-yellow-500 text-black' :
                      index === 1 ? 'bg-gray-400 text-black' :
                      index === 2 ? 'bg-orange-600 text-white' :
                      'bg-muted-foreground/20'
                    }`}>
                      #{index + 1}
                    </div>
                    <div>
                      <div className="font-bold">{player.name}</div>
                      <div className="text-xs text-muted-foreground">{player.clan}</div>
                    </div>
                  </div>
                  <div className="font-bold text-primary">{player.score.toLocaleString()}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}