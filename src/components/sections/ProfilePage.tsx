import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface ProfilePageProps {
  currentUser?: {
    username: string;
    steamId: string;
    avatar: string;
  };
}

type MenuSection = 
  | 'profile' 
  | 'friends' 
  | 'messages' 
  | 'dinosaurs' 
  | 'inventory' 
  | 'clan' 
  | 'referral' 
  | 'rating' 
  | 'donations';

export default function ProfilePage({ currentUser }: ProfilePageProps) {
  const [activeSection, setActiveSection] = useState<MenuSection>('profile');
  const [aboutText, setAboutText] = useState('Привет! Я люблю играть за хищников и исследовать карту. Ищу активный клан для совместной игры.');

  const menuItems = [
    { id: 'profile' as MenuSection, label: 'Мой профиль', icon: 'User' },
    { id: 'friends' as MenuSection, label: 'Мои друзья', icon: 'Users' },
    { id: 'messages' as MenuSection, label: 'Мои сообщения', icon: 'Mail' },
    { id: 'dinosaurs' as MenuSection, label: 'Мои динозавры', icon: 'Github' },
    { id: 'inventory' as MenuSection, label: 'Мой инвентарь', icon: 'Package' },
    { id: 'clan' as MenuSection, label: 'Мой клан / Подбор клана', icon: 'Shield' },
    { id: 'referral' as MenuSection, label: 'Реферальная программа', icon: 'Gift' },
    { id: 'rating' as MenuSection, label: 'Рейтинг игроков', icon: 'Trophy' },
    { id: 'donations' as MenuSection, label: 'История донатов', icon: 'CreditCard' },
  ];

  const userRoles = ['Игрок', 'Премиум', 'Донатер'];
  const clanHistory = [
    { name: 'Raptor Squad', period: '15.01.2024 - 20.03.2024', role: 'Участник' },
    { name: 'Dino Hunters', period: '21.03.2024 - 10.08.2024', role: 'Офицер' },
    { name: 'Alpha Pack', period: '11.08.2024 - настоящее время', role: 'Участник' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-3 space-y-6">
        <Card className="game-card">
          <CardContent className="p-6 text-center space-y-4">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-5xl">
              {currentUser?.avatar || '🦖'}
            </div>
            <div>
              <h3 className="text-xl font-bold">{currentUser?.username || 'DinoHunter'}</h3>
              <p className="text-sm text-muted-foreground">Steam ID: {currentUser?.steamId || '76561198000000000'}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="game-card">
          <CardContent className="p-4 space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                className="w-full justify-start text-left"
                onClick={() => setActiveSection(item.id)}
              >
                <Icon name={item.icon} size={18} className="mr-3" />
                {item.label}
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-9">
        <Card className="game-card">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Icon name={menuItems.find(m => m.id === activeSection)?.icon || 'User'} size={28} />
              <span>{menuItems.find(m => m.id === activeSection)?.label}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {activeSection === 'profile' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-muted-foreground">Никнейм</Label>
                      <div className="text-xl font-bold">{currentUser?.username || 'DinoHunter'}</div>
                    </div>
                    <div>
                      <Label className="text-muted-foreground">Steam ID</Label>
                      <div className="text-lg font-mono">{currentUser?.steamId || '76561198000000000'}</div>
                    </div>
                    <div>
                      <Label className="text-muted-foreground">Роли игрока</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {userRoles.map((role, index) => (
                          <Badge key={index} variant={index === 0 ? 'default' : 'secondary'}>
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-muted-foreground">Уровень аккаунта</Label>
                      <div className="flex items-center space-x-3 mt-2">
                        <div className="text-3xl font-black text-accent">42</div>
                        <div className="flex-1">
                          <div className="h-3 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-accent to-primary w-[75%]"></div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">75% до 43 уровня</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label className="text-muted-foreground">Статистика</Label>
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        <div className="bg-muted/50 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-primary">1,247</div>
                          <div className="text-xs text-muted-foreground">Убийств</div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-accent">347ч</div>
                          <div className="text-xs text-muted-foreground">Игрового времени</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-muted-foreground">История кланов</Label>
                  <div className="mt-2 space-y-3">
                    {clanHistory.map((clan, index) => (
                      <Card key={index} className="border-muted">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-bold text-primary">{clan.name}</div>
                              <div className="text-sm text-muted-foreground">{clan.period}</div>
                            </div>
                            <Badge variant="outline">{clan.role}</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="about" className="text-muted-foreground">О себе</Label>
                  <Textarea
                    id="about"
                    value={aboutText}
                    onChange={(e) => setAboutText(e.target.value)}
                    className="mt-2 min-h-[120px]"
                    placeholder="Расскажите о себе..."
                  />
                  <Button className="mt-3 game-button">
                    <Icon name="Save" size={16} className="mr-2" />
                    Сохранить изменения
                  </Button>
                </div>
              </>
            )}

            {activeSection === 'friends' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Список друзей (12)</h3>
                  <Button size="sm" className="game-button">
                    <Icon name="UserPlus" size={16} className="mr-2" />
                    Добавить друга
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="border-muted">
                      <CardContent className="p-4 flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                          🦕
                        </div>
                        <div className="flex-1">
                          <div className="font-bold">Player{i}</div>
                          <div className="text-sm text-green-500 flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            В сети
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Icon name="Mail" size={14} />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'messages' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Сообщения (3 новых)</h3>
                  <Button size="sm" className="game-button">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Новое сообщение
                  </Button>
                </div>
                <div className="space-y-3">
                  {[
                    { from: 'Admin', text: 'Добро пожаловать на сервер!', time: '10 мин назад', unread: true },
                    { from: 'ClanLeader', text: 'Приглашаю в клан Alpha Pack', time: '2 часа назад', unread: true },
                    { from: 'Player123', text: 'Хочешь поохотиться вместе?', time: '5 часов назад', unread: false },
                  ].map((msg, i) => (
                    <Card key={i} className={msg.unread ? 'border-primary' : 'border-muted'}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                              📨
                            </div>
                            <div>
                              <div className="font-bold flex items-center space-x-2">
                                <span>{msg.from}</span>
                                {msg.unread && <Badge variant="destructive" className="text-xs">Новое</Badge>}
                              </div>
                              <div className="text-sm text-muted-foreground">{msg.text}</div>
                              <div className="text-xs text-muted-foreground mt-1">{msg.time}</div>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Icon name="Eye" size={14} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'dinosaurs' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Мои динозавры (5/10)</h3>
                  <Button size="sm" className="game-button">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Новый слот
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'Rex', type: 'T-Rex', level: 42, status: 'Жив' },
                    { name: 'Raptor', type: 'Velociraptor', level: 35, status: 'Жив' },
                    { name: 'Stego', type: 'Stegosaurus', level: 28, status: 'Ранен' },
                  ].map((dino, i) => (
                    <Card key={i} className="border-primary">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="text-xl font-bold">{dino.name}</div>
                            <div className="text-sm text-muted-foreground">{dino.type}</div>
                          </div>
                          <Badge variant={dino.status === 'Жив' ? 'default' : 'destructive'}>{dino.status}</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm">
                            <span className="text-muted-foreground">Уровень:</span>{' '}
                            <span className="font-bold text-accent">{dino.level}</span>
                          </div>
                          <Button size="sm" variant="outline">
                            <Icon name="MapPin" size={14} className="mr-1" />
                            Найти
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'inventory' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Инвентарь (24/50)</h3>
                  <Button size="sm" className="game-button">
                    <Icon name="Package" size={16} className="mr-2" />
                    Расширить
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Мясо', count: 15, icon: '🍖' },
                    { name: 'Зелье лечения', count: 8, icon: '🧪' },
                    { name: 'Кристаллы', count: 234, icon: '💎' },
                    { name: 'Скины', count: 5, icon: '🎨' },
                  ].map((item, i) => (
                    <Card key={i} className="border-muted hover:border-primary transition-colors cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <div className="text-4xl mb-2">{item.icon}</div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm text-accent">x{item.count}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'clan' && (
              <div className="space-y-4">
                <Card className="border-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl">
                          🛡️
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary">Alpha Pack</h3>
                          <p className="text-muted-foreground">Участник • 45 членов</p>
                        </div>
                      </div>
                      <Button variant="outline">
                        <Icon name="Settings" size={16} className="mr-2" />
                        Настройки
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <h3 className="text-xl font-bold mt-6">Доступные кланы для вступления</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'Raptor Squad', members: 32, level: 15 },
                    { name: 'Dino Lords', members: 28, level: 12 },
                  ].map((clan, i) => (
                    <Card key={i} className="border-muted">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-lg">{clan.name}</div>
                            <div className="text-sm text-muted-foreground">{clan.members} участников • Уровень {clan.level}</div>
                          </div>
                          <Button size="sm" className="game-button">
                            Вступить
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'referral' && (
              <div className="space-y-6">
                <Card className="border-accent bg-accent/5">
                  <CardContent className="p-6 text-center">
                    <Icon name="Gift" size={48} className="mx-auto mb-4 text-accent" />
                    <h3 className="text-2xl font-bold mb-2">Приглашай друзей — получай награды!</h3>
                    <p className="text-muted-foreground mb-4">За каждого приглашенного друга вы получите 500 PL</p>
                    <div className="bg-muted rounded-lg p-4 mb-4">
                      <Label className="text-muted-foreground">Ваша реферальная ссылка</Label>
                      <div className="flex items-center space-x-2 mt-2">
                        <code className="flex-1 bg-background p-2 rounded text-sm">https://dinoserver.ru/ref/DinoHunter</code>
                        <Button size="sm">
                          <Icon name="Copy" size={16} />
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-accent">12</div>
                        <div className="text-sm text-muted-foreground">Приглашено</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">8</div>
                        <div className="text-sm text-muted-foreground">Активных</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-500">6,000</div>
                        <div className="text-sm text-muted-foreground">PL заработано</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === 'rating' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Топ игроков по уровню</h3>
                <div className="space-y-3">
                  {[
                    { rank: 1, name: 'ProDino', level: 85, kills: 5420, icon: '🥇' },
                    { rank: 2, name: 'AlphaRex', level: 78, kills: 4832, icon: '🥈' },
                    { rank: 3, name: 'RaptorKing', level: 72, kills: 4156, icon: '🥉' },
                    { rank: 15, name: 'DinoHunter (Вы)', level: 42, kills: 1247, icon: '' },
                  ].map((player, i) => (
                    <Card key={i} className={player.name.includes('Вы') ? 'border-primary' : 'border-muted'}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="text-2xl font-bold w-12 text-center">
                              {player.icon || `#${player.rank}`}
                            </div>
                            <div>
                              <div className="font-bold">{player.name}</div>
                              <div className="text-sm text-muted-foreground">
                                Уровень {player.level} • {player.kills} убийств
                              </div>
                            </div>
                          </div>
                          <Badge variant={player.rank <= 3 ? 'default' : 'secondary'}>
                            {player.level} lvl
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'donations' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">История транзакций</h3>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Всего потрачено</div>
                    <div className="text-2xl font-bold text-accent">24,500 PL</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { date: '01.10.2024', item: 'Премиум статус (30 дней)', amount: 5000, status: 'Успешно' },
                    { date: '15.09.2024', item: 'Пакет кристаллов x500', amount: 2500, status: 'Успешно' },
                    { date: '01.09.2024', item: 'Слот динозавра', amount: 1500, status: 'Успешно' },
                    { date: '25.08.2024', item: 'Уникальный скин T-Rex', amount: 3500, status: 'Успешно' },
                  ].map((transaction, i) => (
                    <Card key={i} className="border-muted">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                              <Icon name="CreditCard" size={20} className="text-accent" />
                            </div>
                            <div>
                              <div className="font-bold">{transaction.item}</div>
                              <div className="text-sm text-muted-foreground">{transaction.date}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-accent">{transaction.amount} PL</div>
                            <Badge variant="outline" className="text-xs">{transaction.status}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
