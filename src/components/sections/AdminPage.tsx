import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function AdminPage() {
  const [users, setUsers] = useState([
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

  const [news, setNews] = useState([
    { id: 1, title: 'Обновление 2.5: Новые динозавры', date: '2024-09-25', published: true },
    { id: 2, title: 'Клановые войны: Сезон 3', date: '2024-09-20', published: true },
    { id: 3, title: 'Гайд: Как выжить первую ночь', date: '2024-09-15', published: false },
  ]);

  const [selectedUser, setSelectedUser] = useState<any>(null);

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="game-card border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="Users" size={20} />
              <span>Всего игроков</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black text-primary">{serverStats.totalPlayers}</div>
            <p className="text-sm text-muted-foreground mt-1">Зарегистрировано</p>
          </CardContent>
        </Card>

        <Card className="game-card border-green-500/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="Activity" size={20} />
              <span>Онлайн сейчас</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black text-green-500">{serverStats.onlinePlayers}</div>
            <p className="text-sm text-muted-foreground mt-1">Активных игроков</p>
          </CardContent>
        </Card>

        <Card className="game-card border-yellow-500/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="DollarSign" size={20} />
              <span>Доход</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black text-yellow-500">{serverStats.totalRevenue.toLocaleString()} ₽</div>
            <p className="text-sm text-muted-foreground mt-1">Всего заработано</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
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
        </TabsList>

        <TabsContent value="users" className="space-y-6">
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
                          <Button size="sm" variant="outline">
                            <Icon name="Eye" size={14} className="mr-1" />
                            Просмотр
                          </Button>
                          <Button size="sm" variant="destructive">
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
        </TabsContent>

        <TabsContent value="shop" className="space-y-6">
          <Card className="game-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Управление магазином</CardTitle>
                <Button size="sm" className="game-button">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить товар
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold">Тираннозавр</h4>
                        <p className="text-sm text-muted-foreground">Динозавр - Взрослый</p>
                        <p className="text-lg font-bold text-accent mt-1">15,000 PL</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Icon name="Edit" size={14} className="mr-1" />
                          Изменить
                        </Button>
                        <Button size="sm" variant="outline">
                          <Icon name="Trash2" size={14} className="mr-1" />
                          Удалить
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-4">Добавить новый товар</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Название</Label>
                        <Input placeholder="Название товара" />
                      </div>
                      <div className="space-y-2">
                        <Label>Цена (PL)</Label>
                        <Input type="number" placeholder="1000" />
                      </div>
                      <div className="space-y-2">
                        <Label>Категория</Label>
                        <select className="w-full p-2 rounded-md border bg-background">
                          <option>Динозавры</option>
                          <option>Ускорения</option>
                          <option>Корма</option>
                          <option>Таблетки</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label>Редкость</Label>
                        <select className="w-full p-2 rounded-md border bg-background">
                          <option>Обычный</option>
                          <option>Необычный</option>
                          <option>Редкий</option>
                          <option>Эпический</option>
                          <option>Легендарный</option>
                        </select>
                      </div>
                      <div className="col-span-2 space-y-2">
                        <Label>Описание</Label>
                        <Textarea placeholder="Описание товара" />
                      </div>
                    </div>
                    <Button className="game-button mt-4">
                      <Icon name="Plus" size={16} className="mr-2" />
                      Добавить товар
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="news" className="space-y-6">
          <Card className="game-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Управление новостями</CardTitle>
                <Button size="sm" className="game-button">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать новость
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {news.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-bold">{item.title}</h4>
                            {item.published ? (
                              <Badge className="bg-green-500">Опубликовано</Badge>
                            ) : (
                              <Badge variant="secondary">Черновик</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{item.date}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Icon name="Edit" size={14} className="mr-1" />
                            Редактировать
                          </Button>
                          <Button size="sm" variant={item.published ? "secondary" : "default"}>
                            <Icon name={item.published ? "EyeOff" : "Eye"} size={14} className="mr-1" />
                            {item.published ? 'Снять' : 'Опубликовать'}
                          </Button>
                          <Button size="sm" variant="destructive">
                            <Icon name="Trash2" size={14} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="border-2 border-dashed">
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-4">Создать новость</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Заголовок</Label>
                        <Input placeholder="Заголовок новости" />
                      </div>
                      <div className="space-y-2">
                        <Label>Содержание</Label>
                        <Textarea placeholder="Текст новости" rows={5} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Дата публикации</Label>
                          <Input type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label>Тег</Label>
                          <select className="w-full p-2 rounded-md border bg-background">
                            <option>Обновление</option>
                            <option>События</option>
                            <option>Гайд</option>
                            <option>Новости</option>
                          </select>
                        </div>
                      </div>
                      <Button className="game-button">
                        <Icon name="Send" size={16} className="mr-2" />
                        Опубликовать новость
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="servers" className="space-y-6">
          <Card className="game-card">
            <CardHeader>
              <CardTitle>Управление серверами</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'EU-1 Survival', status: 'online', players: 245, max: 300 },
                  { name: 'NA-1 Hardcore', status: 'online', players: 189, max: 200 },
                  { name: 'RU-1 Classic', status: 'maintenance', players: 0, max: 400 },
                ].map((server, index) => (
                  <Card key={index} className={server.status === 'maintenance' ? 'border-orange-500/50' : ''}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${server.status === 'online' ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`}></div>
                            <h4 className="font-bold">{server.name}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Игроков: {server.players}/{server.max}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Icon name="Settings" size={14} className="mr-1" />
                            Настройки
                          </Button>
                          <Button size="sm" variant={server.status === 'online' ? 'destructive' : 'default'}>
                            <Icon name={server.status === 'online' ? 'Power' : 'Play'} size={14} className="mr-1" />
                            {server.status === 'online' ? 'Остановить' : 'Запустить'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card className="game-card">
            <CardHeader>
              <CardTitle>Глобальные настройки</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-bold">Экономика</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Стоимость вращения колеса (ОА)</Label>
                    <Input type="number" defaultValue={100} />
                  </div>
                  <div className="space-y-2">
                    <Label>ОА за час онлайна</Label>
                    <Input type="number" defaultValue={5} />
                  </div>
                  <div className="space-y-2">
                    <Label>ОА за час (Премиум)</Label>
                    <Input type="number" defaultValue={10} />
                  </div>
                  <div className="space-y-2">
                    <Label>Бонус опыта (Премиум %)</Label>
                    <Input type="number" defaultValue={100} />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-bold">Техническое обслуживание</h4>
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div>
                    <h5 className="font-semibold">Режим технических работ</h5>
                    <p className="text-sm text-muted-foreground">Закрывает доступ к серверам для обычных игроков</p>
                  </div>
                  <Button variant="destructive">
                    <Icon name="AlertTriangle" size={16} className="mr-2" />
                    Включить
                  </Button>
                </div>
              </div>

              <Button className="game-button">
                <Icon name="Save" size={16} className="mr-2" />
                Сохранить настройки
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
