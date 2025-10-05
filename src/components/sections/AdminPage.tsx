import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import AdminStats from '@/components/admin/AdminStats';
import AdminUsersTab from '@/components/admin/AdminUsersTab';
import AdminShopTab from '@/components/admin/AdminShopTab';
import AdminNewsTab from '@/components/admin/AdminNewsTab';
import AdminServersTab from '@/components/admin/AdminServersTab';
import AdminSettingsTab from '@/components/admin/AdminSettingsTab';
import AdminLogsTab from '@/components/admin/AdminLogsTab';

interface AdminLog {
  id: number;
  timestamp: string;
  admin: string;
  action: string;
  target: string;
  details: string;
  type: 'user' | 'shop' | 'news' | 'server' | 'settings';
}

interface AdminPageProps {
  currentUser: string;
}

export default function AdminPage({ currentUser }: AdminPageProps) {
  const [logs, setLogs] = useState<AdminLog[]>([
    { id: 1, timestamp: '2024-10-01 14:23:15', admin: 'AdminUser', action: 'Изменен баланс', target: 'DinoHunter_X', details: 'PL: 10000 → 12450', type: 'user' },
    { id: 2, timestamp: '2024-10-01 14:15:42', admin: 'AdminUser', action: 'Добавлен товар', target: 'Тираннозавр', details: 'Цена: 15000 PL', type: 'shop' },
    { id: 3, timestamp: '2024-10-01 13:58:23', admin: 'ModeratorPro', action: 'Заблокирован пользователь', target: 'Cheater123', details: 'Причина: Читы', type: 'user' },
    { id: 4, timestamp: '2024-10-01 13:45:11', admin: 'AdminUser', action: 'Опубликована новость', target: 'Обновление 2.5', details: 'Новые динозавры', type: 'news' },
    { id: 5, timestamp: '2024-10-01 13:30:00', admin: 'AdminUser', action: 'Перезапущен сервер', target: 'RU-1 Classic', details: 'Плановое обслуживание', type: 'server' },
    { id: 6, timestamp: '2024-10-01 12:15:33', admin: 'AdminUser', action: 'Изменены настройки', target: 'Экономика', details: 'ОА за час: 5 → 10', type: 'settings' },
  ]);

  const addLog = (action: string, target: string, details: string, type: AdminLog['type']) => {
    const newLog: AdminLog = {
      id: logs.length + 1,
      timestamp: new Date().toLocaleString('ru-RU', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }),
      admin: currentUser,
      action,
      target,
      details,
      type
    };
    setLogs([newLog, ...logs]);
  };

  const [users] = useState([
    { id: 1, username: 'DinoHunter_X', email: 'hunter@example.com', balance: 12450, activityPoints: 2847, premium: true, role: 'player', banned: false },
    { id: 2, username: 'RexKiller', email: 'rex@example.com', balance: 8900, activityPoints: 1523, premium: false, role: 'player', banned: false },
    { id: 3, username: 'AdminUser', email: 'admin@pangaea.com', balance: 99999, activityPoints: 9999, premium: true, role: 'admin', banned: false },
  ]);

  const [serverStats] = useState({
    totalPlayers: 8942,
    onlinePlayers: 245,
    totalRevenue: 1250000,
    activeServers: 12,
    totalDinosaurs: 47,
    totalTransactions: 15678
  });

  const [news] = useState([
    { id: 1, title: 'Обновление 2.5: Новые динозавры', date: '2024-09-25', published: true },
    { id: 2, title: 'Клановые войны: Сезон 3', date: '2024-09-20', published: true },
    { id: 3, title: 'Гайд: Как выжить первую ночь', date: '2024-09-15', published: false },
  ]);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-3">
          <Icon name="ShieldAlert" size={48} className="text-red-500" />
          <h2 className="text-5xl font-black glow-text text-red-500">АДМИН-ПАНЕЛЬ</h2>
        </div>
        <p className="text-xl text-muted-foreground">Управление сервером Pangaea</p>
        <Badge variant="destructive" className="text-sm">
          <Icon name="Lock" size={14} className="mr-1" />
          Закрытый доступ
        </Badge>
      </div>

      <AdminStats stats={serverStats} />

      <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="users">
            <Icon name="Users" size={16} className="mr-2" />
            Пользователи
          </TabsTrigger>
          <TabsTrigger value="shop">
            <Icon name="ShoppingCart" size={16} className="mr-2" />
            Магазин
          </TabsTrigger>
          <TabsTrigger value="news">
            <Icon name="Newspaper" size={16} className="mr-2" />
            Новости
          </TabsTrigger>
          <TabsTrigger value="servers">
            <Icon name="Server" size={16} className="mr-2" />
            Серверы
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Icon name="Settings" size={16} className="mr-2" />
            Настройки
          </TabsTrigger>
          <TabsTrigger value="logs">
            <Icon name="ScrollText" size={16} className="mr-2" />
            Логи
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <AdminUsersTab users={users} onAddLog={addLog} />
        </TabsContent>

        <TabsContent value="shop">
          <AdminShopTab />
        </TabsContent>

        <TabsContent value="news">
          <AdminNewsTab news={news} />
        </TabsContent>

        <TabsContent value="servers">
          <AdminServersTab />
        </TabsContent>

        <TabsContent value="settings">
          <AdminSettingsTab onAddLog={addLog} />
        </TabsContent>

        <TabsContent value="logs">
          <AdminLogsTab logs={logs} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
