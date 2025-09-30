import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import ClanCard from '@/components/clans/ClanCard';
import ClanHeader from '@/components/clans/ClanHeader';
import ClanInfoTab from '@/components/clans/ClanInfoTab';
import ClanMembersTab from '@/components/clans/ClanMembersTab';
import ClanStorageTab from '@/components/clans/ClanStorageTab';
import ClanMapTab from '@/components/clans/ClanMapTab';
import ClanTasksTab from '@/components/clans/ClanTasksTab';
import ClanNewsTab from '@/components/clans/ClanNewsTab';
import ClanActivityTab from '@/components/clans/ClanActivityTab';

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

  if (selectedClan) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={() => setSelectedClan(null)}>
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Назад к списку
          </Button>
        </div>

        <ClanHeader clan={selectedClan} />

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

          <TabsContent value="info">
            <ClanInfoTab clan={selectedClan} />
          </TabsContent>

          <TabsContent value="members">
            <ClanMembersTab members={clanMembers} />
          </TabsContent>

          <TabsContent value="storage">
            <ClanStorageTab inventory={clanInventory} />
          </TabsContent>

          <TabsContent value="map">
            <ClanMapTab clan={selectedClan} />
          </TabsContent>

          <TabsContent value="tasks">
            <ClanTasksTab tasks={clanTasks} />
          </TabsContent>

          <TabsContent value="news">
            <ClanNewsTab news={clanNews} />
          </TabsContent>

          <TabsContent value="activity">
            <ClanActivityTab members={clanMembers} />
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
          <ClanCard 
            key={clan.id} 
            clan={clan} 
            onClick={() => setSelectedClan(clan)} 
          />
        ))}
      </div>
    </div>
  );
}