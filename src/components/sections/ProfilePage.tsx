import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface PlayerStats {
  level: number;
  xp: number;
  clan: string;
  rank: string;
  achievements: number;
  kills: number;
  survival: number;
}

interface Dinosaur {
  id: number;
  name: string;
  species: string;
  level: number;
  health: number;
  hunger: number;
  status: string;
  age: string;
  kills: number;
  location: string;
}

interface ProfilePageProps {
  playerStats: PlayerStats;
  myDinosaurs: Dinosaur[];
}

export default function ProfilePage({ playerStats, myDinosaurs }: ProfilePageProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">👤 Профиль игрока</h2>
      </div>
      
      <Tabs defaultValue="stats" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="stats">Статистика</TabsTrigger>
          <TabsTrigger value="dinosaurs">Мои динозавры</TabsTrigger>
          <TabsTrigger value="achievements">Достижения</TabsTrigger>
        </TabsList>
        
        <TabsContent value="stats" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Статистика</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Уровень</span>
                  <span className="font-bold text-accent">{playerStats.level}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Опыт</span>
                    <span>{playerStats.xp}%</span>
                  </div>
                  <Progress value={playerStats.xp} className="h-2" />
                </div>
                <div className="flex justify-between">
                  <span>Клан</span>
                  <span className="font-bold text-primary">{playerStats.clan}</span>
                </div>
                <div className="flex justify-between">
                  <span>Ранг</span>
                  <span className="font-bold">{playerStats.rank}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Общая статистика</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>🏆 Достижения</span>
                  <span className="font-bold">{playerStats.achievements}/50</span>
                </div>
                <div className="flex justify-between">
                  <span>💀 Убийства</span>
                  <span className="font-bold text-destructive">{playerStats.kills}</span>
                </div>
                <div className="flex justify-between">
                  <span>⏱️ Время выживания</span>
                  <span className="font-bold text-accent">{playerStats.survival}ч</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="dinosaurs" className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">🦕 Мои динозавры</h3>
            <p className="text-muted-foreground">Управляйте своей коллекцией динозавров</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myDinosaurs.map((dino) => (
              <Card key={dino.id} className="hover:bg-card/80 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{dino.name}</CardTitle>
                      <CardDescription className="text-lg">{dino.species}</CardDescription>
                    </div>
                    <Badge variant={dino.status === 'Активен' ? 'default' : dino.status === 'Охотится' ? 'destructive' : 'secondary'}>
                      {dino.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Уровень:</span>
                      <div className="font-bold text-accent">{dino.level}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Возраст:</span>
                      <div className="font-bold">{dino.age}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Убийства:</span>
                      <div className="font-bold text-destructive">{dino.kills}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Локация:</span>
                      <div className="font-bold text-primary">{dino.location}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>❤️ Здоровье</span>
                      <span>{dino.health}%</span>
                    </div>
                    <Progress value={dino.health} className="h-2" />
                    
                    <div className="flex justify-between text-sm">
                      <span>🍖 Голод</span>
                      <span>{dino.hunger}%</span>
                    </div>
                    <Progress value={dino.hunger} className="h-2" />
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      Найти
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Icon name="Utensils" size={14} className="mr-1" />
                      Кормить
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Icon name="Settings" size={14} className="mr-1" />
                      Действия
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>📊 Статистика стада</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent">{myDinosaurs.length}</div>
                  <div className="text-sm text-muted-foreground">Всего динозавров</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{myDinosaurs.filter(d => d.age === 'Взрослый').length}</div>
                  <div className="text-sm text-muted-foreground">Взрослых</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">{myDinosaurs.reduce((sum, d) => sum + d.kills, 0)}</div>
                  <div className="text-sm text-muted-foreground">Общие убийства</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-destructive">{Math.round(myDinosaurs.reduce((sum, d) => sum + d.level, 0) / myDinosaurs.length)}</div>
                  <div className="text-sm text-muted-foreground">Средний уровень</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="achievements" className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">🏆 Достижения</h3>
            <p className="text-muted-foreground">Ваши игровые достижения и награды</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="border-yellow-500/50">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">👑</div>
                <h4 className="font-bold text-yellow-400">Альфа-хищник</h4>
                <p className="text-sm text-muted-foreground">Достигнуть 40 уровня</p>
              </CardContent>
            </Card>
            
            <Card className="border-red-500/50">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">💀</div>
                <h4 className="font-bold text-red-400">Убийца сотни</h4>
                <p className="text-sm text-muted-foreground">1000+ убийств</p>
              </CardContent>
            </Card>
            
            <Card className="border-green-500/50">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">🦕</div>
                <h4 className="font-bold text-green-400">Коллекционер</h4>
                <p className="text-sm text-muted-foreground">5+ видов динозавров</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-500/50">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">⏱️</div>
                <h4 className="font-bold text-blue-400">Выживший</h4>
                <p className="text-sm text-muted-foreground">100+ часов игры</p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-500/50">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-bold text-purple-400">Охотник</h4>
                <p className="text-sm text-muted-foreground">50+ успешных охот</p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-500/50">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">🏛️</div>
                <h4 className="font-bold text-orange-400">Лидер клана</h4>
                <p className="text-sm text-muted-foreground">Возглавить клан</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}