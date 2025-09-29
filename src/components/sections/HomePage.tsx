import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface TopPlayer {
  name: string;
  clan: string;
  score: number;
}

interface HomePageProps {
  topPlayers: TopPlayer[];
}

export default function HomePage({ topPlayers }: HomePageProps) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center rounded-lg overflow-hidden" 
           style={{backgroundImage: 'url(/img/679e1631-55d7-426e-9745-48338a3ee7ee.jpg)'}}>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-bold tracking-wider text-white">THE ISLE</h1>
            <p className="text-xl text-gray-200">Выживание в мире динозавров</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Play" size={20} className="mr-2" />
              ИГРАТЬ СЕЙЧАС
            </Button>
          </div>
        </div>
      </div>

      {/* Server Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">👥 Игроков онлайн</CardTitle>
            <CardDescription className="text-3xl font-bold text-accent">1,247</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">🌍 Серверов</CardTitle>
            <CardDescription className="text-3xl font-bold text-primary">12</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">🦕 Видов динозавров</CardTitle>
            <CardDescription className="text-3xl font-bold text-secondary">47</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Top Players */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">🏆 Топ игроков</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topPlayers.map((player, index) => (
              <div key={player.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center space-x-3">
                  <Badge variant={index === 0 ? "default" : "secondary"}>#{index + 1}</Badge>
                  <div>
                    <div className="font-bold">{player.name}</div>
                    <div className="text-sm text-muted-foreground">{player.clan}</div>
                  </div>
                </div>
                <div className="font-bold text-accent">{player.score.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}