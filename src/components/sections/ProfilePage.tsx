import { useState, useEffect } from 'react';
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
  const [isPremium, setIsPremium] = useState(true);
  const [premiumDaysLeft, setPremiumDaysLeft] = useState(15);
  const [activityPoints, setActivityPoints] = useState(2847);
  const [onlineTime, setOnlineTime] = useState(0);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    if (!isOnline) return;

    const interval = setInterval(() => {
      setOnlineTime(prev => prev + 1);
      
      if (onlineTime > 0 && onlineTime % 60 === 0) {
        const pointsGained = isPremium ? 10 : 5;
        setActivityPoints(prev => prev + pointsGained);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isOnline, onlineTime, isPremium]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black glow-text">👤 Профиль игрока</h2>
        
        {isPremium && (
          <Card className="border-2 border-yellow-500/50 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon name="Crown" size={32} className="text-yellow-500" />
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-yellow-500">Премиум статус активен</h3>
                    <p className="text-sm text-muted-foreground">Осталось дней: {premiumDaysLeft}</p>
                  </div>
                </div>
                <Button variant="outline" className="border-yellow-500/50">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Продлить
                </Button>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-green-500 font-bold">+100%</div>
                  <div className="text-muted-foreground">Опыт</div>
                </div>
                <div className="text-center">
                  <div className="text-green-500 font-bold">+50%</div>
                  <div className="text-muted-foreground">ОА за онлайн</div>
                </div>
                <div className="text-center">
                  <div className="text-green-500 font-bold">x2</div>
                  <div className="text-muted-foreground">Рост динозавров</div>
                </div>
                <div className="text-center">
                  <div className="text-green-500 font-bold">VIP</div>
                  <div className="text-muted-foreground">Очередь</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="border-2 border-primary/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={32} className="text-primary" />
                <div className="text-left">
                  <h3 className="text-xl font-bold">Время онлайн</h3>
                  <p className="text-2xl font-mono text-primary">{formatTime(onlineTime)}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Sparkles" size={24} className="text-accent" />
                  <span className="text-3xl font-black text-accent">{activityPoints}</span>
                  <span className="text-sm text-muted-foreground">ОА</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {isPremium ? '+10 ОА каждые 60 мин' : '+5 ОА каждые 60 мин'}
                </p>
              </div>
            </div>
            <div className="mt-3">
              <Progress value={(onlineTime % 3600) / 36} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1 text-center">
                До следующего начисления: {60 - Math.floor((onlineTime % 3600) / 60)} мин
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="stats" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="stats">Статистика</TabsTrigger>
          <TabsTrigger value="dinosaurs">Мои динозавры</TabsTrigger>
          <TabsTrigger value="achievements">Достижения</TabsTrigger>
          <TabsTrigger value="premium">Премиум</TabsTrigger>
        </TabsList>
        
        <TabsContent value="stats" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="game-card">
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
                <div className="flex justify-between">
                  <span>Очки активности</span>
                  <span className="font-bold text-accent">{activityPoints} ОА</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="game-card">
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
                <div className="flex justify-between">
                  <span>🌐 Общий онлайн</span>
                  <span className="font-bold text-primary">{playerStats.survival + 24}ч</span>
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
              <Card key={dino.id} className="game-card hover:scale-105 transition-all">
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
          
          <Card className="game-card">
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
            <Card className="border-yellow-500/50 game-card">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">👑</div>
                <h4 className="font-bold text-yellow-400">Альфа-хищник</h4>
                <p className="text-sm text-muted-foreground">Достигнуть 40 уровня</p>
              </CardContent>
            </Card>
            
            <Card className="border-red-500/50 game-card">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">💀</div>
                <h4 className="font-bold text-red-400">Убийца сотни</h4>
                <p className="text-sm text-muted-foreground">1000+ убийств</p>
              </CardContent>
            </Card>
            
            <Card className="border-green-500/50 game-card">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">🦕</div>
                <h4 className="font-bold text-green-400">Коллекционер</h4>
                <p className="text-sm text-muted-foreground">5+ видов динозавров</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-500/50 game-card">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">⏱️</div>
                <h4 className="font-bold text-blue-400">Выживший</h4>
                <p className="text-sm text-muted-foreground">100+ часов игры</p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-500/50 game-card">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-bold text-purple-400">Охотник</h4>
                <p className="text-sm text-muted-foreground">50+ успешных охот</p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-500/50 game-card">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">🏛️</div>
                <h4 className="font-bold text-orange-400">Лидер клана</h4>
                <p className="text-sm text-muted-foreground">Возглавить клан</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="premium" className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">👑 Премиум статус</h3>
            <p className="text-muted-foreground">Получите максимум преимуществ в игре</p>
          </div>

          <Card className="border-2 border-yellow-500/50 bg-gradient-to-br from-yellow-500/10 to-orange-500/10">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Icon name="Crown" size={28} className="text-yellow-500" />
                <span>Преимущества премиум статуса</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Icon name="TrendingUp" size={24} className="text-green-500 mt-1" />
                  <div>
                    <h4 className="font-bold">+100% к опыту</h4>
                    <p className="text-sm text-muted-foreground">Быстрее прокачивайте уровень</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Sparkles" size={24} className="text-accent mt-1" />
                  <div>
                    <h4 className="font-bold">+50% ОА за онлайн</h4>
                    <p className="text-sm text-muted-foreground">10 ОА в час вместо 5</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Zap" size={24} className="text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-bold">x2 скорость роста</h4>
                    <p className="text-sm text-muted-foreground">Динозавры растут быстрее</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Users" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">VIP очередь</h4>
                    <p className="text-sm text-muted-foreground">Приоритетный вход на сервер</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Package" size={24} className="text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold">Больше слотов</h4>
                    <p className="text-sm text-muted-foreground">+5 слотов динозавров</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Gift" size={24} className="text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-bold">Ежедневные награды</h4>
                    <p className="text-sm text-muted-foreground">Бонусы каждый день</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <Card className="border-yellow-500/30">
                  <CardContent className="p-4 text-center">
                    <Icon name="Clock" size={32} className="mx-auto mb-2 text-yellow-500" />
                    <h4 className="font-bold text-xl mb-1">7 дней</h4>
                    <p className="text-2xl font-black text-accent mb-2">1,500 PL</p>
                    <p className="text-xs text-muted-foreground mb-4">214 PL/день</p>
                    <Button className="w-full game-button">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-yellow-500/50 border-2 scale-105">
                  <CardContent className="p-4 text-center">
                    <Badge className="mb-2 bg-yellow-500">Популярное</Badge>
                    <Icon name="Calendar" size={32} className="mx-auto mb-2 text-yellow-500" />
                    <h4 className="font-bold text-xl mb-1">30 дней</h4>
                    <p className="text-2xl font-black text-accent mb-2">5,000 PL</p>
                    <p className="text-xs text-muted-foreground mb-4">167 PL/день</p>
                    <Button className="w-full game-button">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-yellow-500/30">
                  <CardContent className="p-4 text-center">
                    <Icon name="Crown" size={32} className="mx-auto mb-2 text-yellow-500" />
                    <h4 className="font-bold text-xl mb-1">90 дней</h4>
                    <p className="text-2xl font-black text-accent mb-2">12,000 PL</p>
                    <p className="text-xs text-muted-foreground mb-4">133 PL/день</p>
                    <Button className="w-full game-button">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
