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
                  <CardTitle>Достижения</CardTitle>
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