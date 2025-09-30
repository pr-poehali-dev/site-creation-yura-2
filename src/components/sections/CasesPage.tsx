import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Prize {
  id: number;
  name: string;
  rarity: string;
  icon: string;
  chance: number;
}

interface Case {
  id: number;
  name: string;
  price: number;
  icon: string;
  color: string;
  description: string;
  prizes: Prize[];
}

export default function CasesPage() {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const [wonPrize, setWonPrize] = useState<Prize | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [balance] = useState(5000);

  const cases: Case[] = [
    {
      id: 1,
      name: 'Стартовый кейс',
      price: 50,
      icon: '📦',
      color: 'from-gray-500 to-gray-700',
      description: 'Идеален для новичков',
      prizes: [
        { id: 1, name: 'Мясо хищника x5', rarity: 'Обычный', icon: '🥩', chance: 50 },
        { id: 2, name: 'Лечебные травы x3', rarity: 'Обычный', icon: '🌿', chance: 30 },
        { id: 3, name: '50 монет', rarity: 'Необычный', icon: '🪙', chance: 15 },
        { id: 4, name: 'Яйцо Дилофозавра', rarity: 'Редкий', icon: '🥚', chance: 5 }
      ]
    },
    {
      id: 2,
      name: 'Охотничий кейс',
      price: 150,
      icon: '🎯',
      color: 'from-green-500 to-green-700',
      description: 'Для опытных охотников',
      prizes: [
        { id: 1, name: 'Капкан', rarity: 'Обычный', icon: '🪤', chance: 40 },
        { id: 2, name: 'Яд рапторов x2', rarity: 'Необычный', icon: '☠️', chance: 30 },
        { id: 3, name: 'Приманка для хищников', rarity: 'Редкий', icon: '🎣', chance: 20 },
        { id: 4, name: 'Легендарное копье', rarity: 'Легендарный', icon: '🗡️', chance: 10 }
      ]
    },
    {
      id: 3,
      name: 'Кейс хищника',
      price: 250,
      icon: '🦖',
      color: 'from-red-500 to-red-700',
      description: 'Опасные динозавры внутри',
      prizes: [
        { id: 1, name: 'Яйцо Карнотавра', rarity: 'Необычный', icon: '🥚', chance: 35 },
        { id: 2, name: 'Яйцо Аллозавра', rarity: 'Редкий', icon: '🥚', chance: 30 },
        { id: 3, name: 'Яйцо Спинозавра', rarity: 'Эпический', icon: '🥚', chance: 25 },
        { id: 4, name: 'Яйцо Гигантозавра', rarity: 'Легендарный', icon: '🥚', chance: 10 }
      ]
    },
    {
      id: 4,
      name: 'Королевский кейс',
      price: 500,
      icon: '👑',
      color: 'from-yellow-500 to-yellow-700',
      description: 'Только редкие награды',
      prizes: [
        { id: 1, name: '500 монет', rarity: 'Редкий', icon: '🪙', chance: 40 },
        { id: 2, name: 'Шкура Рекса', rarity: 'Эпический', icon: '🦴', chance: 30 },
        { id: 3, name: 'Сердце альфа-хищника', rarity: 'Эпический', icon: '❤️', chance: 20 },
        { id: 4, name: 'Яйцо Тираннозавра', rarity: 'Легендарный', icon: '🥚', chance: 10 }
      ]
    },
    {
      id: 5,
      name: 'Кейс выживания',
      price: 100,
      icon: '⛺',
      color: 'from-blue-500 to-blue-700',
      description: 'Всё для выживания',
      prizes: [
        { id: 1, name: 'Палатка', rarity: 'Обычный', icon: '🏕️', chance: 35 },
        { id: 2, name: 'Аптечка x3', rarity: 'Необычный', icon: '💊', chance: 35 },
        { id: 3, name: 'Запас еды x10', rarity: 'Редкий', icon: '🍖', chance: 20 },
        { id: 4, name: 'Набор выживальщика', rarity: 'Эпический', icon: '🎒', chance: 10 }
      ]
    },
    {
      id: 6,
      name: 'Мистический кейс',
      price: 350,
      icon: '🔮',
      color: 'from-purple-500 to-purple-700',
      description: 'Магические артефакты',
      prizes: [
        { id: 1, name: 'Амулет здоровья', rarity: 'Необычный', icon: '💎', chance: 35 },
        { id: 2, name: 'Зелье силы', rarity: 'Редкий', icon: '🧪', chance: 30 },
        { id: 3, name: 'Кристалл защиты', rarity: 'Эпический', icon: '💠', chance: 25 },
        { id: 4, name: 'Древний тотем', rarity: 'Легендарный', icon: '🗿', chance: 10 }
      ]
    },
    {
      id: 7,
      name: 'Водный кейс',
      price: 200,
      icon: '🌊',
      color: 'from-cyan-500 to-cyan-700',
      description: 'Морские сокровища',
      prizes: [
        { id: 1, name: 'Клык Мегалодона', rarity: 'Необычный', icon: '🦷', chance: 40 },
        { id: 2, name: 'Жемчужина', rarity: 'Редкий', icon: '🦪', chance: 30 },
        { id: 3, name: 'Яйцо Мозазавра', rarity: 'Эпический', icon: '🥚', chance: 20 },
        { id: 4, name: 'Корона Посейдона', rarity: 'Легендарный', icon: '👑', chance: 10 }
      ]
    },
    {
      id: 8,
      name: 'Боевой кейс',
      price: 300,
      icon: '⚔️',
      color: 'from-orange-500 to-orange-700',
      description: 'Оружие и броня',
      prizes: [
        { id: 1, name: 'Костяной меч', rarity: 'Необычный', icon: '🗡️', chance: 35 },
        { id: 2, name: 'Щит из костей', rarity: 'Редкий', icon: '🛡️', chance: 30 },
        { id: 3, name: 'Броня хищника', rarity: 'Эпический', icon: '🦺', chance: 25 },
        { id: 4, name: 'Клинок Рекса', rarity: 'Легендарный', icon: '⚔️', chance: 10 }
      ]
    },
    {
      id: 9,
      name: 'Кейс богатства',
      price: 400,
      icon: '💰',
      color: 'from-amber-500 to-amber-700',
      description: 'Только валюта',
      prizes: [
        { id: 1, name: '200 монет', rarity: 'Необычный', icon: '🪙', chance: 40 },
        { id: 2, name: '500 монет', rarity: 'Редкий', icon: '🪙', chance: 30 },
        { id: 3, name: '1000 монет', rarity: 'Эпический', icon: '🪙', chance: 20 },
        { id: 4, name: '2500 монет', rarity: 'Легендарный', icon: '🪙', chance: 10 }
      ]
    },
    {
      id: 10,
      name: 'Альфа кейс',
      price: 1000,
      icon: '⭐',
      color: 'from-pink-500 to-pink-700',
      description: 'Самый ценный кейс',
      prizes: [
        { id: 1, name: 'Яйцо Индоминуса', rarity: 'Эпический', icon: '🥚', chance: 45 },
        { id: 2, name: 'Легендарная броня', rarity: 'Эпический', icon: '🦺', chance: 30 },
        { id: 3, name: '5000 монет', rarity: 'Легендарный', icon: '🪙', chance: 15 },
        { id: 4, name: 'Титул "Альфа"', rarity: 'Мифический', icon: '🏆', chance: 10 }
      ]
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Обычный': return 'text-gray-400';
      case 'Необычный': return 'text-green-400';
      case 'Редкий': return 'text-blue-400';
      case 'Эпический': return 'text-purple-400';
      case 'Легендарный': return 'text-yellow-400';
      case 'Мифический': return 'text-pink-400';
      default: return 'text-gray-400';
    }
  };

  const getRarityBadgeVariant = (rarity: string) => {
    switch (rarity) {
      case 'Легендарный': 
      case 'Мифический': 
        return 'default';
      case 'Эпический': 
        return 'secondary';
      case 'Редкий': 
        return 'destructive';
      default: 
        return 'outline';
    }
  };

  const openCase = (caseItem: Case) => {
    if (balance < caseItem.price) {
      return;
    }

    setSelectedCase(caseItem);
    setIsOpening(true);
    setWonPrize(null);
    setShowResult(false);

    const random = Math.random() * 100;
    let cumulative = 0;
    let selectedPrize = caseItem.prizes[0];

    for (const prize of caseItem.prizes) {
      cumulative += prize.chance;
      if (random <= cumulative) {
        selectedPrize = prize;
        break;
      }
    }

    setTimeout(() => {
      setWonPrize(selectedPrize);
      setIsOpening(false);
      setShowResult(true);
    }, 3000);
  };

  const closeDialog = () => {
    setSelectedCase(null);
    setShowResult(false);
    setWonPrize(null);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">📦 Кейсы</h2>
        <p className="text-muted-foreground">Открывай кейсы и получай ценные призы!</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-3xl">💰</div>
              <div>
                <div className="text-sm text-muted-foreground">Ваш баланс</div>
                <div className="text-2xl font-bold text-primary">{balance} 🪙</div>
              </div>
            </div>
            <Button variant="outline">
              <Icon name="Plus" size={16} className="mr-2" />
              Пополнить
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cases.map((caseItem) => (
          <Card 
            key={caseItem.id} 
            className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
            onClick={() => openCase(caseItem)}
          >
            <CardHeader>
              <div className={`w-full h-32 bg-gradient-to-br ${caseItem.color} rounded-lg flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}>
                {caseItem.icon}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <CardTitle className="text-xl">{caseItem.name}</CardTitle>
                <CardDescription className="text-sm">{caseItem.description}</CardDescription>
              </div>
              
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">Содержимое:</div>
                <div className="flex flex-wrap gap-1">
                  {caseItem.prizes.map((prize) => (
                    <div 
                      key={prize.id} 
                      className={`text-lg ${getRarityColor(prize.rarity)}`}
                      title={prize.name}
                    >
                      {prize.icon}
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                className="w-full" 
                disabled={balance < caseItem.price}
              >
                Открыть за {caseItem.price} 🪙
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={selectedCase !== null} onOpenChange={closeDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center space-x-2">
              <span>{selectedCase?.icon}</span>
              <span>{selectedCase?.name}</span>
            </DialogTitle>
            <DialogDescription>
              {isOpening ? 'Открываем кейс...' : showResult ? 'Поздравляем с выигрышем!' : ''}
            </DialogDescription>
          </DialogHeader>

          {isOpening && (
            <div className="py-12 text-center">
              <div className="animate-bounce text-8xl mb-4">{selectedCase?.icon}</div>
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Loader2" size={24} className="animate-spin text-primary" />
                <span className="text-lg">Открываем кейс...</span>
              </div>
            </div>
          )}

          {showResult && wonPrize && (
            <div className="space-y-6">
              <div className="text-center py-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                <div className="text-8xl mb-4">{wonPrize.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{wonPrize.name}</h3>
                <Badge variant={getRarityBadgeVariant(wonPrize.rarity)} className="text-lg px-4 py-1">
                  {wonPrize.rarity}
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-semibold">Все возможные призы из этого кейса:</div>
                <div className="grid grid-cols-2 gap-2">
                  {selectedCase?.prizes.map((prize) => (
                    <div 
                      key={prize.id}
                      className={`p-3 rounded-lg border ${prize.id === wonPrize.id ? 'border-primary bg-primary/10' : 'border-border'}`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{prize.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{prize.name}</div>
                          <div className={`text-xs ${getRarityColor(prize.rarity)}`}>
                            {prize.rarity} ({prize.chance}%)
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <Button onClick={closeDialog} className="flex-1">
                  Забрать приз
                </Button>
                <Button 
                  onClick={() => {
                    closeDialog();
                    setTimeout(() => selectedCase && openCase(selectedCase), 100);
                  }} 
                  variant="outline"
                  className="flex-1"
                  disabled={balance < (selectedCase?.price || 0)}
                >
                  Открыть еще
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}