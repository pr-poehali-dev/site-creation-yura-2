import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
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

interface ClanMember {
  id: number;
  name: string;
  rank: string;
  level: number;
  contribution: number;
  status: string;
  joinedDate: string;
}

interface ClanTask {
  id: number;
  title: string;
  description: string;
  reward: string;
  progress: number;
  total: number;
  icon: string;
}

export default function ClansPage() {
  const [selectedClan, setSelectedClan] = useState<Clan | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const clans: Clan[] = [
    {
      id: 1,
      name: 'Apex Predators',
      tag: 'APEX',
      leader: 'DinoHunter_X',
      members: 45,
      maxMembers: 50,
      level: 15,
      description: 'Элитный клан хищников. Принимаем только опытных игроков с уровнем 30+. Активное участие в PvP обязательно.',
      icon: '👑',
      color: 'from-yellow-500 to-orange-600',
      territory: 'North Plains',
      founded: '15.01.2024'
    },
    {
      id: 2,
      name: 'Silent Death',
      tag: 'SLNT',
      leader: 'RexKiller',
      members: 38,
      maxMembers: 50,
      level: 12,
      description: 'Тактический клан для скрытных охотников. Специализируемся на командной охоте и засадах.',
      icon: '🦅',
      color: 'from-gray-700 to-gray-900',
      territory: 'Deep Forest',
      founded: '22.01.2024'
    },
    {
      id: 3,
      name: 'Wild Pack',
      tag: 'WILD',
      leader: 'SurvivalPro',
      members: 42,
      maxMembers: 50,
      level: 14,
      description: 'Дружелюбный клан для игроков всех уровней. Помогаем новичкам развиваться и учим выживанию.',
      icon: '🐺',
      color: 'from-green-600 to-green-800',
      territory: 'Valley',
      founded: '10.02.2024'
    },
    {
      id: 4,
      name: 'Razor Claws',
      tag: 'CLAWS',
      leader: 'AlphaRaptor',
      members: 35,
      maxMembers: 40,
      level: 11,
      description: 'Агрессивный клан рапторов. Быстрые атаки и координированная охота - наша стратегия.',
      icon: '⚔️',
      color: 'from-red-600 to-red-800',
      territory: 'Highlands',
      founded: '05.03.2024'
    },
    {
      id: 5,
      name: 'Shadow Hunters',
      tag: 'SHDW',
      leader: 'NightStalker',
      members: 30,
      maxMembers: 40,
      level: 10,
      description: 'Ночные охотники. Предпочитаем игру в темное время суток и засады.',
      icon: '🌙',
      color: 'from-purple-600 to-purple-900',
      territory: 'Swamp',
      founded: '18.03.2024'
    },
    {
      id: 6,
      name: 'Titans Legion',
      tag: 'TITAN',
      leader: 'MegaBoss',
      members: 28,
      maxMembers: 50,
      level: 9,
      description: 'Клан для любителей крупных динозавров. Специализируемся на игре за титанозавров и брахиозавров.',
      icon: '🦕',
      color: 'from-blue-500 to-blue-700',
      territory: 'Center Lake',
      founded: '01.04.2024'
    }
  ];

  const clanMembers: ClanMember[] = [
    { id: 1, name: 'DinoHunter_X', rank: 'Лидер', level: 42, contribution: 15420, status: 'В сети', joinedDate: '15.01.2024' },
    { id: 2, name: 'RaptorKing', rank: 'Офицер', level: 38, contribution: 12350, status: 'В сети', joinedDate: '16.01.2024' },
    { id: 3, name: 'ShadowClaw', rank: 'Офицер', level: 35, contribution: 11200, status: 'Не в сети', joinedDate: '20.01.2024' },
    { id: 4, name: 'AlphaMale', rank: 'Ветеран', level: 40, contribution: 10800, status: 'В сети', joinedDate: '22.01.2024' },
    { id: 5, name: 'HunterPro', rank: 'Ветеран', level: 37, contribution: 9500, status: 'В игре', joinedDate: '25.01.2024' },
    { id: 6, name: 'FastRaptor', rank: 'Боец', level: 32, contribution: 7200, status: 'В сети', joinedDate: '01.02.2024' },
    { id: 7, name: 'SilentKiller', rank: 'Боец', level: 30, contribution: 6800, status: 'В игре', joinedDate: '05.02.2024' },
    { id: 8, name: 'NightHunter', rank: 'Боец', level: 28, contribution: 5500, status: 'Не в сети', joinedDate: '10.02.2024' },
    { id: 9, name: 'WildDino', rank: 'Новичок', level: 25, contribution: 3200, status: 'В сети', joinedDate: '15.02.2024' },
    { id: 10, name: 'YoungRex', rank: 'Новичок', level: 22, contribution: 2100, status: 'В игре', joinedDate: '20.02.2024' }
  ];

  const clanTasks: ClanTask[] = [
    { id: 1, title: 'Групповая охота', description: 'Совместно убить 50 динозавров', reward: '5000 🪙', progress: 32, total: 50, icon: '🎯' },
    { id: 2, title: 'Защита территории', description: 'Победить в 10 клановых сражениях', reward: '10000 🪙', progress: 7, total: 10, icon: '⚔️' },
    { id: 3, title: 'Сбор ресурсов', description: 'Собрать 1000 единиц ресурсов', reward: '3000 🪙', progress: 850, total: 1000, icon: '📦' },
    { id: 4, title: 'Выращивание потомства', description: 'Вырастить 20 детенышей до взрослого состояния', reward: '7500 🪙', progress: 12, total: 20, icon: '🥚' }
  ];

  const clanNews = [
    { id: 1, title: 'Победа в клановой войне!', text: 'Наш клан одержал победу над кланом "Dark Hunters" со счетом 15:8', date: '2 часа назад', icon: '🏆' },
    { id: 2, title: 'Новая территория', text: 'Мы успешно захватили North Plains. Теперь это наша территория!', date: '5 часов назад', icon: '🗺️' },
    { id: 3, title: 'Пополнение рядов', text: 'В клан вступили 3 новых игрока. Добро пожаловать!', date: '1 день назад', icon: '👥' },
    { id: 4, title: 'Рекорд охоты', text: 'DinoHunter_X убил Гигантозавра 50-го уровня в одиночку!', date: '2 дня назад', icon: '🦖' }
  ];

  const clanInventory = [
    { id: 1, name: 'Мясо хищника', quantity: 450, icon: '🥩' },
    { id: 2, name: 'Шкуры', quantity: 120, icon: '🦴' },
    { id: 3, name: 'Яйца Карнотавра', quantity: 15, icon: '🥚' },
    { id: 4, name: 'Лечебные травы', quantity: 200, icon: '🌿' },
    { id: 5, name: 'Оружие', quantity: 35, icon: '⚔️' },
    { id: 6, name: 'Броня', quantity: 28, icon: '🛡️' }
  ];

  const filteredClans = clans.filter(clan => 
    clan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    clan.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  if (selectedClan) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={() => setSelectedClan(null)}>
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Назад к списку
          </Button>
        </div>

        <Card className={`bg-gradient-to-r ${selectedClan.color}`}>
          <CardContent className="p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-6xl">{selectedClan.icon}</div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-3xl font-bold">{selectedClan.name}</h2>
                    <Badge variant="secondary" className="text-lg">[{selectedClan.tag}]</Badge>
                  </div>
                  <p className="text-white/80 mt-1">Лидер: {selectedClan.leader}</p>
                  <p className="text-white/80">Основан: {selectedClan.founded}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold">Уровень {selectedClan.level}</div>
                <div className="text-white/80 mt-2">
                  Участники: {selectedClan.members}/{selectedClan.maxMembers}
                </div>
                <Button className="mt-4" variant="secondary">
                  <Icon name="UserPlus" size={16} className="mr-2" />
                  Подать заявку
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="info" className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="info">Информация</TabsTrigger>
            <TabsTrigger value="members">Участники</TabsTrigger>
            <TabsTrigger value="storage">Хранилище</TabsTrigger>
            <TabsTrigger value="map">Карта</TabsTrigger>
            <TabsTrigger value="tasks">Задания</TabsTrigger>
            <TabsTrigger value="news">Новости</TabsTrigger>
            <TabsTrigger value="activity">Активность</TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>О клане</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Описание</h3>
                  <p className="text-muted-foreground">{selectedClan.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Территория</h3>
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={16} className="text-primary" />
                      <span>{selectedClan.territory}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Дата основания</h3>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span>{selectedClan.founded}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Рейтинг клана</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-primary mb-2">#1</div>
                  <p className="text-sm text-muted-foreground">Первое место в рейтинге</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Общие убийства</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-destructive mb-2">2,547</div>
                  <p className="text-sm text-muted-foreground">За всё время</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Казна клана</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-accent mb-2">45,000 🪙</div>
                  <p className="text-sm text-muted-foreground">Доступно для развития</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="members" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Участники клана ({clanMembers.length})</CardTitle>
                <CardDescription>Список всех членов клана с их статистикой</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {clanMembers.map((member) => (
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
          </TabsContent>

          <TabsContent value="storage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Хранилище клана</CardTitle>
                <CardDescription>Общие ресурсы доступные всем членам клана</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {clanInventory.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4 text-center">
                        <div className="text-4xl mb-2">{item.icon}</div>
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-2xl font-bold text-primary mt-2">{item.quantity}</div>
                        <Button size="sm" className="w-full mt-3">
                          <Icon name="Download" size={14} className="mr-1" />
                          Взять
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="map" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Территория клана</CardTitle>
                <CardDescription>Контролируемые локации: {selectedClan.territory}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/a38310ff-24f6-4b88-9b16-8ba3227b3b68.png" 
                    alt="Clan Territory"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
                    <div className={`text-6xl animate-pulse`}>{selectedClan.icon}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Клановые задания</CardTitle>
                <CardDescription>Выполняйте задания вместе и получайте награды</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {clanTasks.map((task) => (
                  <Card key={task.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl">{task.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">{task.title}</h3>
                            <Badge variant="outline" className="text-accent">{task.reward}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Прогресс: {task.progress}/{task.total}</span>
                              <span>{Math.round((task.progress / task.total) * 100)}%</span>
                            </div>
                            <Progress value={(task.progress / task.total) * 100} />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="news" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Новости клана</CardTitle>
                <CardDescription>Последние события и достижения</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {clanNews.map((news) => (
                  <div key={news.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                    <div className="text-3xl">{news.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{news.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{news.text}</p>
                      <div className="text-xs text-muted-foreground flex items-center">
                        <Icon name="Clock" size={12} className="mr-1" />
                        {news.date}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Онлайн участников</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">
                      {clanMembers.filter(m => m.status === 'В сети' || m.status === 'В игре').length}
                    </div>
                    <p className="text-muted-foreground">из {clanMembers.length} участников</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Активность за неделю</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-accent mb-2">94%</div>
                    <p className="text-muted-foreground">Средняя активность</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Последняя активность</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="Sword" size={20} className="text-destructive" />
                    <div>
                      <div className="font-semibold">DinoHunter_X убил Карнотавра</div>
                      <div className="text-sm text-muted-foreground">5 минут назад</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="Download" size={20} className="text-primary" />
                    <div>
                      <div className="font-semibold">RaptorKing взял мясо из хранилища</div>
                      <div className="text-sm text-muted-foreground">15 минут назад</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="Trophy" size={20} className="text-accent" />
                    <div>
                      <div className="font-semibold">Клан выполнил задание "Групповая охота"</div>
                      <div className="text-sm text-muted-foreground">1 час назад</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">🏛️ Кланы</h2>
        <p className="text-muted-foreground">Присоединяйся к клану или создай свой собственный</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Поиск клана по названию или тегу..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button>
              <Icon name="Plus" size={16} className="mr-2" />
              Создать клан
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredClans.map((clan) => (
          <Card 
            key={clan.id} 
            className="hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedClan(clan)}
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
        ))}
      </div>
    </div>
  );
}