import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface AdminLog {
  id: number;
  timestamp: string;
  admin: string;
  action: string;
  target: string;
  details: string;
  type: 'user' | 'shop' | 'news' | 'server' | 'settings';
}

interface AdminLogsTabProps {
  logs: AdminLog[];
}

export default function AdminLogsTab({ logs }: AdminLogsTabProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'user': return 'border-blue-500/30 bg-blue-500/5';
      case 'shop': return 'border-green-500/30 bg-green-500/5';
      case 'news': return 'border-purple-500/30 bg-purple-500/5';
      case 'server': return 'border-orange-500/30 bg-orange-500/5';
      case 'settings': return 'border-red-500/30 bg-red-500/5';
      default: return '';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'user': return 'User';
      case 'shop': return 'ShoppingCart';
      case 'news': return 'Newspaper';
      case 'server': return 'Server';
      case 'settings': return 'Settings';
      default: return 'Info';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="game-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Логи действий администраторов</CardTitle>
              <CardDescription>История всех действий в админ-панели</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">
                <Icon name="Filter" size={16} className="mr-2" />
                Фильтр
              </Button>
              <Button size="sm" variant="outline">
                <Icon name="Download" size={16} className="mr-2" />
                Экспорт
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {logs.map((log) => (
              <Card key={log.id} className={`${getTypeColor(log.type)} border-l-4`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name={getTypeIcon(log.type) as any} size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-bold text-sm">{log.admin}</span>
                          <Icon name="ArrowRight" size={14} className="text-muted-foreground" />
                          <span className="text-sm font-semibold">{log.action}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-1">
                          Цель: <span className="font-medium text-foreground">{log.target}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {log.details}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground text-right flex-shrink-0 ml-4">
                      <div>{log.timestamp.split(' ')[0]}</div>
                      <div className="font-mono">{log.timestamp.split(' ')[1]}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center">
            <Button variant="outline">
              <Icon name="ChevronDown" size={16} className="mr-2" />
              Загрузить еще
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="game-card">
          <CardContent className="p-4 text-center">
            <Icon name="User" size={24} className="mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold">{logs.filter(l => l.type === 'user').length}</div>
            <div className="text-xs text-muted-foreground">Действия с юзерами</div>
          </CardContent>
        </Card>
        <Card className="game-card">
          <CardContent className="p-4 text-center">
            <Icon name="ShoppingCart" size={24} className="mx-auto mb-2 text-green-500" />
            <div className="text-2xl font-bold">{logs.filter(l => l.type === 'shop').length}</div>
            <div className="text-xs text-muted-foreground">Изменения магазина</div>
          </CardContent>
        </Card>
        <Card className="game-card">
          <CardContent className="p-4 text-center">
            <Icon name="Newspaper" size={24} className="mx-auto mb-2 text-purple-500" />
            <div className="text-2xl font-bold">{logs.filter(l => l.type === 'news').length}</div>
            <div className="text-xs text-muted-foreground">Публикации новостей</div>
          </CardContent>
        </Card>
        <Card className="game-card">
          <CardContent className="p-4 text-center">
            <Icon name="Server" size={24} className="mx-auto mb-2 text-orange-500" />
            <div className="text-2xl font-bold">{logs.filter(l => l.type === 'server').length}</div>
            <div className="text-xs text-muted-foreground">Управление серверами</div>
          </CardContent>
        </Card>
        <Card className="game-card">
          <CardContent className="p-4 text-center">
            <Icon name="Settings" size={24} className="mx-auto mb-2 text-red-500" />
            <div className="text-2xl font-bold">{logs.filter(l => l.type === 'settings').length}</div>
            <div className="text-xs text-muted-foreground">Изменения настроек</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
