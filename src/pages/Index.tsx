import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'shop', label: 'Магазин', icon: 'ShoppingCart' },
    { id: 'auction', label: 'Аукцион', icon: 'Gavel' },
    { id: 'inventory', label: 'Инвентарь', icon: 'Package2' },
    { id: 'map', label: 'Карта', icon: 'Map' },
    { id: 'profile', label: 'Профиль', icon: 'User' },
    { id: 'rules', label: 'Правила', icon: 'FileText' },
    { id: 'wheel', label: 'Колесо удачи', icon: 'RotateCcw' },
    { id: 'cases', label: 'Кейсы', icon: 'Package' },
    { id: 'events', label: 'События', icon: 'Calendar' },
    { id: 'donate', label: 'Донаты', icon: 'Heart' }
  ];

  const shopItems = [
    { id: 1, name: 'Мясо хищника', price: 150, category: 'Еда', rarity: 'common' },
    { id: 2, name: 'Яйцо Карнотавра', price: 2500, category: 'Размножение', rarity: 'rare' },
    { id: 3, name: 'Шкура Рекса', price: 5000, category: 'Крафт', rarity: 'legendary' },
    { id: 4, name: 'Лечебные травы', price: 75, category: 'Медицина', rarity: 'common' }
  ];

  const playerStats = {
    level: 42,
    xp: 65,
    clan: 'Apex Predators',
    rank: 'Альфа-хищник',
    achievements: 28,
    kills: 1247,
    survival: 156
  };

  const topPlayers = [
    { name: 'DinoHunter_X', clan: 'Apex Predators', score: 15420 },
    { name: 'RexKiller', clan: 'Silent Death', score: 14850 },
    { name: 'SurvivalPro', clan: 'Wild Pack', score: 14200 },
    { name: 'AlphaRaptor', clan: 'Razor Claws', score: 13900 },
    { name: 'NightStalker', clan: 'Shadow Hunters', score: 13450 }
  ];

  const inventoryItems = [
    { id: 1, name: 'Мясо хищника', quantity: 12, category: 'Еда', rarity: 'common', description: 'Питательное мясо для восстановления здоровья' },
    { id: 2, name: 'Яйцо Карнотавра', quantity: 2, category: 'Размножение', rarity: 'rare', description: 'Редкое яйцо для выведения потомства' },
    { id: 3, name: 'Шкура Рекса', quantity: 1, category: 'Крафт', rarity: 'legendary', description: 'Легендарный материал для крафта' },
    { id: 4, name: 'Лечебные травы', quantity: 24, category: 'Медицина', rarity: 'common', description: 'Восстанавливают здоровье со временем' },
    { id: 5, name: 'Кости тираннозавра', quantity: 5, category: 'Крафт', rarity: 'rare', description: 'Прочные кости для создания оружия' },
    { id: 6, name: 'Сердце альфа-хищника', quantity: 1, category: 'Крафт', rarity: 'legendary', description: 'Дает особые способности' },
    { id: 7, name: 'Вода из чистого источника', quantity: 8, category: 'Напитки', rarity: 'common', description: 'Утоляет жажду и очищает организм' },
    { id: 8, name: 'Яд рапторов', quantity: 3, category: 'Оружие', rarity: 'rare', description: 'Смертельный яд для атак' }
  ];

  const myDinosaurs = [
    { 
      id: 1, 
      name: 'Рекс-Альфа', 
      species: 'Тираннозавр', 
      level: 45, 
      health: 95, 
      hunger: 78, 
      status: 'Активен', 
      age: 'Взрослый',
      kills: 127,
      location: 'Центральные равнины'
    },
    { 
      id: 2, 
      name: 'Молниеносный', 
      species: 'Велоцираптор', 
      level: 32, 
      health: 87, 
      hunger: 45, 
      status: 'Охотится', 
      age: 'Взрослый',
      kills: 89,
      location: 'Темный лес'
    },
    { 
      id: 3, 
      name: 'Железнобок', 
      species: 'Карнотавр', 
      level: 28, 
      health: 92, 
      hunger: 65, 
      status: 'Отдыхает', 
      age: 'Взрослый',
      kills: 56,
      location: 'Скалистые холмы'
    },
    { 
      id: 4, 
      name: 'Малыш', 
      species: 'Дилофозавр', 
      level: 12, 
      health: 100, 
      hunger: 90, 
      status: 'Растет', 
      age: 'Детеныш',
      kills: 3,
      location: 'Безопасная зона'
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-500';
      case 'rare': return 'bg-blue-500';
      case 'legendary': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'inventory':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">🎒 Инвентарь</h2>
              <p className="text-muted-foreground">Управляйте своими предметами и ресурсами</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Inventory Grid */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Package2" size={20} />
                      <span>Предметы ({inventoryItems.length}/50)</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {inventoryItems.map((item) => (
                        <Card key={item.id} className="hover:bg-card/80 transition-colors cursor-pointer">
                          <CardContent className="p-4">
                            <div className="text-center space-y-2">
                              <div className="w-12 h-12 mx-auto bg-muted rounded-lg flex items-center justify-center text-2xl">
                                {item.category === 'Еда' && '🥩'}
                                {item.category === 'Размножение' && '🥚'}
                                {item.category === 'Крафт' && '🔨'}
                                {item.category === 'Медицина' && '🌿'}
                                {item.category === 'Напитки' && '💧'}
                                {item.category === 'Оружие' && '⚔️'}
                              </div>
                              <div className="text-sm font-medium">{item.name}</div>
                              <Badge className={getRarityColor(item.rarity)} variant="secondary">
                                x{item.quantity}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Inventory Stats & Actions */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">📊 Статистика</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>Слоты занято:</span>
                      <span className="font-bold">28/50</span>
                    </div>
                    <Progress value={56} className="h-2" />
                    <div className="flex justify-between">
                      <span>Общий вес:</span>
                      <span className="font-bold">142кг</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Стоимость:</span>
                      <span className="font-bold text-accent">12,450 🪙</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">⚡ Быстрые действия</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Icon name="Trash2" size={14} className="mr-2" />
                      Выбросить все
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <Icon name="ArrowUpDown" size={14} className="mr-2" />
                      Сортировать
                    </Button>
                    <Button variant="secondary" size="sm" className="w-full">
                      <Icon name="ShoppingCart" size={14} className="mr-2" />
                      Продать все
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">🏷️ Фильтры</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      🥩 Еда
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      🔨 Крафт
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      🌿 Медицина
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      ⚔️ Оружие
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
        
      case 'shop':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">🛒 Игровой магазин</h2>
              <p className="text-muted-foreground">Покупайте предметы для выживания</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shopItems.map((item) => (
                <Card key={item.id} className="hover:bg-card/80 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <Badge className={getRarityColor(item.rarity)}>{item.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-accent">{item.price} 🪙</span>
                      <Button variant="secondary" size="sm">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Купить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'profile':
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

      case 'auction':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">🎯 Аукцион</h2>
              <p className="text-muted-foreground">Редкие предметы от игроков</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-yellow-500/50">
                <CardHeader>
                  <CardTitle className="text-yellow-400">Яйцо Спинозавра</CardTitle>
                  <CardDescription>Крайне редкое яйцо хищника</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Текущая ставка:</span>
                      <span className="font-bold text-accent">15,000 🪙</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Время до окончания:</span>
                      <span className="font-bold">2ч 45м</span>
                    </div>
                    <Button className="w-full">Сделать ставку</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-blue-500/50">
                <CardHeader>
                  <CardTitle className="text-blue-400">Клык Мегалодона</CardTitle>
                  <CardDescription>Артефакт древнего хищника</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Текущая ставка:</span>
                      <span className="font-bold text-accent">8,500 🪙</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Время до окончания:</span>
                      <span className="font-bold">5ч 12м</span>
                    </div>
                    <Button className="w-full">Сделать ставку</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="relative h-96 bg-cover bg-center rounded-lg overflow-hidden" 
                 style={{backgroundImage: 'url(/img/679e1631-55d7-426e-9745-48338a3ee7ee.jpg)'}}>
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <h1 className="text-6xl font-bold tracking-wider text-white">THE ISLE</h1>
                  <p className="text-xl text-gray-200">Выживание в мире динозавров</p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Play" size={20} className="mr-2" />
                    ИГРАТЬ СЕЙЧАС
                  </Button>
                </div>
              </div>
            </div>

            {/* Server Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">👥 Игроков онлайн</CardTitle>
                  <CardDescription className="text-3xl font-bold text-accent">1,247</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">🌍 Серверов</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary">12</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">🦕 Видов динозавров</CardTitle>
                  <CardDescription className="text-3xl font-bold text-secondary">47</CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Top Players */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">🏆 Топ игроков</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topPlayers.map((player, index) => (
                    <div key={player.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center space-x-3">
                        <Badge variant={index === 0 ? "default" : "secondary"}>#{index + 1}</Badge>
                        <div>
                          <div className="font-bold">{player.name}</div>
                          <div className="text-sm text-muted-foreground">{player.clan}</div>
                        </div>
                      </div>
                      <div className="font-bold text-accent">{player.score.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">🦕</div>
              <span className="text-xl font-bold">THE ISLE</span>
            </div>
            
            <div className="flex items-center space-x-1">
              {navigationItems.slice(0, 6).map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveSection(item.id)}
                  className="flex items-center space-x-1"
                >
                  <Icon name={item.icon as any} size={16} />
                  <span className="hidden lg:inline">{item.label}</span>
                </Button>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Icon name="Bell" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Settings" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="border-b border-border/30 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-1 py-2">
            {navigationItems.slice(6).map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setActiveSection(item.id)}
                className="flex items-center space-x-1"
              >
                <Icon name={item.icon as any} size={14} />
                <span className="text-sm">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">🦕 THE ISLE</h3>
              <p className="text-sm text-muted-foreground">
                Выживайте в мире динозавров. Охотьтесь, выращивайте потомство и станьте альфа-хищником.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Сообщество</h4>
              <div className="space-y-2 text-sm">
                <div>Discord</div>
                <div>Telegram</div>
                <div>YouTube</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <div className="space-y-2 text-sm">
                <div>Техподдержка</div>
                <div>Правила сервера</div>
                <div>Репортить баги</div>
              </div>
            </div>
          </div>
          <div className="border-t border-border/30 pt-4 mt-8 text-center text-sm text-muted-foreground">
            © 2024 THE ISLE Server. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}