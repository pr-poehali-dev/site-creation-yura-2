import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface User {
  id: number;
  username: string;
  email: string;
  balance: number;
  activityPoints: number;
  premium: boolean;
  role: string;
  banned: boolean;
}

interface AdminUsersTabProps {
  users: User[];
  onAddLog: (action: string, target: string, details: string, type: 'user') => void;
}

export default function AdminUsersTab({ users, onAddLog }: AdminUsersTabProps) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="space-y-6">
      <Card className="game-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Управление пользователями</CardTitle>
            <Button size="sm" className="game-button">
              <Icon name="UserPlus" size={16} className="mr-2" />
              Добавить пользователя
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <Card key={user.id} className={`${user.banned ? 'border-red-500/50' : ''}`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="User" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold text-lg">{user.username}</h4>
                          {user.premium && (
                            <Badge className="bg-yellow-500">
                              <Icon name="Crown" size={12} className="mr-1" />
                              Premium
                            </Badge>
                          )}
                          {user.role === 'admin' && (
                            <Badge variant="destructive">
                              <Icon name="Shield" size={12} className="mr-1" />
                              Admin
                            </Badge>
                          )}
                          {user.banned && (
                            <Badge variant="destructive">Заблокирован</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <div className="flex items-center space-x-4 mt-1 text-xs">
                          <span className="text-muted-foreground">PL: <span className="font-bold text-foreground">{user.balance}</span></span>
                          <span className="text-muted-foreground">ОА: <span className="font-bold text-accent">{user.activityPoints}</span></span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" onClick={() => setSelectedUser(user)}>
                        <Icon name="Edit" size={14} className="mr-1" />
                        Изменить
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => onAddLog('Просмотр профиля', user.username, 'Открыт профиль пользователя', 'user')}>
                        <Icon name="Eye" size={14} className="mr-1" />
                        Просмотр
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => onAddLog('Заблокирован пользователь', user.username, 'Причина: Нарушение правил', 'user')}>
                        <Icon name="Ban" size={14} className="mr-1" />
                        Бан
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedUser && (
        <Card className="game-card border-2 border-primary">
          <CardHeader>
            <CardTitle>Редактирование пользователя: {selectedUser.username}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Баланс PL</Label>
                <Input type="number" defaultValue={selectedUser.balance} />
              </div>
              <div className="space-y-2">
                <Label>Очки активности (ОА)</Label>
                <Input type="number" defaultValue={selectedUser.activityPoints} />
              </div>
              <div className="space-y-2">
                <Label>Роль</Label>
                <select className="w-full p-2 rounded-md border bg-background">
                  <option value="player">Игрок</option>
                  <option value="moderator">Модератор</option>
                  <option value="admin">Администратор</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label>Премиум статус</Label>
                <select className="w-full p-2 rounded-md border bg-background">
                  <option value="false">Нет</option>
                  <option value="true">Да</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button className="game-button">
                <Icon name="Save" size={16} className="mr-2" />
                Сохранить изменения
              </Button>
              <Button variant="outline" onClick={() => setSelectedUser(null)}>
                Отмена
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
