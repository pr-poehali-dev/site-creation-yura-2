import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Event {
  id: number;
  title: string;
  description: string;
  type: string;
  startDate: string;
  endDate: string;
  reward: string;
  participants: number;
  maxParticipants: number;
  icon: string;
  status: string;
}

interface SeasonalLocation {
  id: number;
  name: string;
  description: string;
  x: number;
  y: number;
  icon: string;
  color: string;
  availableUntil: string;
  rewards: string[];
}

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const activeEvents: Event[] = [
    {
      id: 1,
      title: 'Охота на Альфа-хищника',
      description: 'Найдите и убейте легендарного Альфа-Рекса. Награда выдается первым 10 игрокам.',
      type: 'PvE',
      startDate: '01.10.2024',
      endDate: '07.10.2024',
      reward: '10,000 🪙 + Яйцо Альфа-Рекса',
      participants: 47,
      maxParticipants: 100,
      icon: '🦖',
      status: 'active'
    },
    {
      id: 2,
      title: 'Клановые войны',
      description: 'Сражайтесь за территории и ресурсы. Победивший клан получает эксклюзивные награды.',
      type: 'PvP',
      startDate: '30.09.2024',
      endDate: '14.10.2024',
      reward: '50,000 🪙 для клана',
      participants: 156,
      maxParticipants: 200,
      icon: '⚔️',
      status: 'active'
    },
    {
      id: 3,
      title: 'Гонка на выживание',
      description: 'Пройдите через опасные зоны карты за ограниченное время. Только самые быстрые выживут.',
      type: 'Race',
      startDate: '02.10.2024',
      endDate: '02.10.2024',
      reward: '5,000 🪙 + Скины',
      participants: 89,
      maxParticipants: 150,
      icon: '🏃',
      status: 'active'
    },
    {
      id: 4,
      title: 'Ночь хищников',
      description: 'Особое событие только для хищников. Повышенный урон и награды за убийства.',
      type: 'Special',
      startDate: '03.10.2024',
      endDate: '04.10.2024',
      reward: '3,000 🪙 за убийство',
      participants: 234,
      maxParticipants: 300,
      icon: '🌙',
      status: 'active'
    }
  ];

  const upcomingEvents: Event[] = [
    {
      id: 5,
      title: 'Турнир чемпионов',
      description: 'Лучшие игроки сразятся в арене. Только один станет чемпионом сезона.',
      type: 'Tournament',
      startDate: '15.10.2024',
      endDate: '15.10.2024',
      reward: '100,000 🪙 + Титул',
      participants: 0,
      maxParticipants: 64,
      icon: '🏆',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Зимний фестиваль',
      description: 'Особые снежные локации, новые динозавры и праздничные награды.',
      type: 'Festival',
      startDate: '01.12.2024',
      endDate: '31.12.2024',
      reward: 'Праздничные скины',
      participants: 0,
      maxParticipants: 1000,
      icon: '❄️',
      status: 'upcoming'
    }
  ];

  const seasonalLocations: SeasonalLocation[] = [
    {
      id: 1,
      name: 'Вулканическая пещера',
      description: 'Опасная локация с лавой и редкими ресурсами',
      x: 35,
      y: 25,
      icon: '🌋',
      color: 'bg-red-600',
      availableUntil: '15.10.2024',
      rewards: ['Обсидиан', 'Огненный кристалл', 'Редкие яйца']
    },
    {
      id: 2,
      name: 'Ледяная пустошь',
      description: 'Замерзшая территория с уникальными динозаврами',
      x: 70,
      y: 15,
      icon: '❄️',
      color: 'bg-blue-400',
      availableUntil: '20.10.2024',
      rewards: ['Ледяная шкура', 'Мамонтовый клык', 'Морозный амулет']
    },
    {
      id: 3,
      name: 'Затерянные руины',
      description: 'Древняя цивилизация с артефактами и сокровищами',
      x: 45,
      y: 60,
      icon: '🏛️',
      color: 'bg-amber-600',
      availableUntil: '25.10.2024',
      rewards: ['Древний артефакт', 'Золото', 'Таинственное яйцо']
    },
    {
      id: 4,
      name: 'Кристальная пещера',
      description: 'Пещера с магическими кристаллами и светящимися грибами',
      x: 60,
      y: 70,
      icon: '💎',
      color: 'bg-purple-600',
      availableUntil: '30.10.2024',
      rewards: ['Магический кристалл', 'Светящийся гриб', 'Зелье силы']
    },
    {
      id: 5,
      name: 'Остров хищников',
      description: 'Остров полный опасных альфа-хищников',
      x: 15,
      y: 85,
      icon: '🏝️',
      color: 'bg-green-700',
      availableUntil: '10.11.2024',
      rewards: ['Альфа-трофей', 'Премиум яйца', 'Легендарное оружие']
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'PvE': return 'bg-green-600';
      case 'PvP': return 'bg-red-600';
      case 'Race': return 'bg-blue-600';
      case 'Special': return 'bg-purple-600';
      case 'Tournament': return 'bg-yellow-600';
      case 'Festival': return 'bg-pink-600';
      default: return 'bg-gray-600';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return <Badge className="bg-green-600">Активно</Badge>;
      case 'upcoming': return <Badge variant="outline">Скоро</Badge>;
      default: return <Badge variant="secondary">Завершено</Badge>;
    }
  };

  if (selectedEvent) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={() => setSelectedEvent(null)}>
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Назад к событиям
          </Button>
        </div>

        <Card className={`${getEventTypeColor(selectedEvent.type)}`}>
          <CardContent className="p-8 text-white">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="text-8xl">{selectedEvent.icon}</div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h2 className="text-4xl font-bold">{selectedEvent.title}</h2>
                    {getStatusBadge(selectedEvent.status)}
                  </div>
                  <p className="text-white/90 text-lg mb-4">{selectedEvent.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white/70">Начало:</span>
                      <div className="font-semibold">{selectedEvent.startDate}</div>
                    </div>
                    <div>
                      <span className="text-white/70">Окончание:</span>
                      <div className="font-semibold">{selectedEvent.endDate}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>🎁 Награда</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{selectedEvent.reward}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>👥 Участники</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>{selectedEvent.participants} / {selectedEvent.maxParticipants}</span>
                  <span>{Math.round((selectedEvent.participants / selectedEvent.maxParticipants) * 100)}%</span>
                </div>
                <Progress value={(selectedEvent.participants / selectedEvent.maxParticipants) * 100} />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>📋 Правила события</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-2">
              <Icon name="Check" size={16} className="mt-0.5 text-primary" />
              <span>Событие доступно для игроков уровня 20+</span>
            </div>
            <div className="flex items-start space-x-2">
              <Icon name="Check" size={16} className="mt-0.5 text-primary" />
              <span>Можно участвовать в команде или соло</span>
            </div>
            <div className="flex items-start space-x-2">
              <Icon name="Check" size={16} className="mt-0.5 text-primary" />
              <span>Награды выдаются автоматически после завершения</span>
            </div>
            <div className="flex items-start space-x-2">
              <Icon name="Check" size={16} className="mt-0.5 text-primary" />
              <span>Один игрок может получить награду только один раз</span>
            </div>
          </CardContent>
        </Card>

        {selectedEvent.status === 'active' && (
          <Button size="lg" className="w-full">
            <Icon name="Play" size={20} className="mr-2" />
            Принять участие
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">🎉 События</h2>
        <p className="text-muted-foreground">Участвуйте в событиях и получайте уникальные награды</p>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="active">Активные ({activeEvents.length})</TabsTrigger>
          <TabsTrigger value="upcoming">Предстоящие ({upcomingEvents.length})</TabsTrigger>
          <TabsTrigger value="locations">Сезонные локации ({seasonalLocations.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeEvents.map((event) => (
              <Card 
                key={event.id} 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <CardHeader className={`${getEventTypeColor(event.type)} text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">{event.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <CardDescription className="text-white/80">{event.type}</CardDescription>
                      </div>
                    </div>
                    {getStatusBadge(event.status)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Начало</div>
                      <div className="font-semibold">{event.startDate}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Окончание</div>
                      <div className="font-semibold">{event.endDate}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Участники</span>
                      <span className="font-semibold">{event.participants}/{event.maxParticipants}</span>
                    </div>
                    <Progress value={(event.participants / event.maxParticipants) * 100} />
                  </div>

                  <div className="pt-2 border-t">
                    <div className="text-xs text-muted-foreground">Награда:</div>
                    <div className="font-semibold text-primary">{event.reward}</div>
                  </div>

                  <Button className="w-full">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card 
                key={event.id} 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer opacity-90"
                onClick={() => setSelectedEvent(event)}
              >
                <CardHeader className={`${getEventTypeColor(event.type)} text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">{event.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <CardDescription className="text-white/80">{event.type}</CardDescription>
                      </div>
                    </div>
                    {getStatusBadge(event.status)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Начало</div>
                      <div className="font-semibold">{event.startDate}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Окончание</div>
                      <div className="font-semibold">{event.endDate}</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <div className="text-xs text-muted-foreground">Награда:</div>
                    <div className="font-semibold text-primary">{event.reward}</div>
                  </div>

                  <Button className="w-full" variant="outline">
                    <Icon name="Bell" size={16} className="mr-2" />
                    Напомнить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="locations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>🗺️ Сезонные локации на карте</CardTitle>
              <CardDescription>Особые временные локации с уникальными наградами</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full aspect-square bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/a38310ff-24f6-4b88-9b16-8ba3227b3b68.png" 
                  alt="Seasonal Locations Map"
                  className="w-full h-full object-cover"
                />

                {seasonalLocations.map((location) => (
                  <div
                    key={location.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: `${location.x}%`, top: `${location.y}%` }}
                  >
                    <div className={`w-12 h-12 rounded-full ${location.color} flex items-center justify-center text-2xl shadow-2xl border-4 border-white group-hover:scale-125 transition-transform animate-pulse`}>
                      {location.icon}
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      <div className="bg-black/90 backdrop-blur-sm border border-white/30 rounded-lg p-3 shadow-2xl whitespace-nowrap">
                        <div className="font-bold text-sm text-white">{location.name}</div>
                        <div className="text-xs text-gray-300">{location.description}</div>
                        <div className="text-xs text-yellow-400 mt-1">До: {location.availableUntil}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {seasonalLocations.map((location) => (
              <Card key={location.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-12 h-12 rounded-full ${location.color} flex items-center justify-center text-2xl`}>
                        {location.icon}
                      </div>
                      <CardTitle className="text-lg">{location.name}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>{location.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="Clock" size={14} className="text-primary" />
                    <span>Доступна до: <span className="font-semibold">{location.availableUntil}</span></span>
                  </div>
                  
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Награды:</div>
                    <div className="flex flex-wrap gap-1">
                      {location.rewards.map((reward, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {reward}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button size="sm" className="w-full">
                    <Icon name="MapPin" size={14} className="mr-2" />
                    Показать на карте
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}