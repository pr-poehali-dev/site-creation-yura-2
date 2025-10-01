import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Prize {
  id: number;
  name: string;
  color: string;
  rarity: string;
  chance: number;
  icon: string;
}

export default function WheelPage() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState<Prize | null>(null);
  const [activityPoints, setActivityPoints] = useState(2847);
  const spinCost = 100;

  const prizes: Prize[] = [
    { id: 1, name: '5,000 PL', color: 'bg-yellow-500', rarity: 'Легендарный', chance: 3, icon: '💎' },
    { id: 2, name: 'Тираннозавр', color: 'bg-purple-600', rarity: 'Эпический', chance: 5, icon: '🦖' },
    { id: 3, name: '2,000 PL', color: 'bg-orange-500', rarity: 'Редкий', chance: 10, icon: '💰' },
    { id: 4, name: 'Премиум 7 дней', color: 'bg-yellow-600', rarity: 'Редкий', chance: 8, icon: '👑' },
    { id: 5, name: 'Ускорение x3', color: 'bg-blue-500', rarity: 'Необычный', chance: 15, icon: '⚡' },
    { id: 6, name: '500 PL', color: 'bg-green-500', rarity: 'Необычный', chance: 20, icon: '🪙' },
    { id: 7, name: 'Корм Биг x5', color: 'bg-teal-500', rarity: 'Обычный', chance: 20, icon: '🍖' },
    { id: 8, name: 'Таблетка лечения x3', color: 'bg-cyan-500', rarity: 'Обычный', chance: 19, icon: '💊' }
  ];

  const spinWheel = () => {
    if (isSpinning || activityPoints < spinCost) return;

    setIsSpinning(true);
    setWonPrize(null);
    setActivityPoints(prev => prev - spinCost);

    const random = Math.random() * 100;
    let cumulative = 0;
    let selectedPrize = prizes[prizes.length - 1];

    for (const prize of prizes) {
      cumulative += prize.chance;
      if (random <= cumulative) {
        selectedPrize = prize;
        break;
      }
    }

    const segmentAngle = 360 / prizes.length;
    const prizeIndex = prizes.findIndex(p => p.id === selectedPrize.id);
    const targetAngle = 360 * 5 + (prizeIndex * segmentAngle) + (segmentAngle / 2);
    
    setRotation(targetAngle);

    setTimeout(() => {
      setIsSpinning(false);
      setWonPrize(selectedPrize);
    }, 4000);
  };

  const getRarityBadgeVariant = (rarity: string) => {
    switch (rarity) {
      case 'Легендарный': return 'default';
      case 'Эпический': return 'secondary';
      case 'Редкий': return 'destructive';
      case 'Необычный': return 'outline';
      default: return 'outline';
    }
  };

  const canSpin = activityPoints >= spinCost && !isSpinning;

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-5xl font-black glow-text">🎡 Колесо удачи</h2>
        <p className="text-xl text-muted-foreground">Потрать ОА и получи ценные призы!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="game-card">
            <CardContent className="p-8">
              <div className="flex flex-col items-center space-y-6">
                <div className="relative w-96 h-96">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 z-10">
                    <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-accent drop-shadow-lg"></div>
                  </div>
                  
                  <div 
                    className="w-full h-full rounded-full border-8 border-accent overflow-hidden relative shadow-2xl"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transition: isSpinning ? 'transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none'
                    }}
                  >
                    {prizes.map((prize, index) => {
                      const segmentAngle = 360 / prizes.length;
                      const startAngle = index * segmentAngle;
                      
                      return (
                        <div
                          key={prize.id}
                          className={`absolute w-full h-full ${prize.color}`}
                          style={{
                            clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((startAngle - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((startAngle - 90) * Math.PI / 180)}%, ${50 + 50 * Math.cos((startAngle + segmentAngle - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((startAngle + segmentAngle - 90) * Math.PI / 180)}%)`
                          }}
                        >
                          <div 
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center"
                            style={{
                              transform: `rotate(${startAngle + segmentAngle / 2}deg) translateY(-120px)`,
                              transformOrigin: 'center'
                            }}
                          >
                            <div className="text-3xl mb-1">{prize.icon}</div>
                            <div className="text-xs whitespace-nowrap drop-shadow-md">{prize.name}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent rounded-full border-4 border-background flex items-center justify-center text-3xl font-bold shadow-2xl">
                    🎯
                  </div>
                </div>

                <Button 
                  size="lg" 
                  onClick={spinWheel}
                  disabled={!canSpin}
                  className="game-button w-full max-w-md text-lg py-7 shadow-lg"
                >
                  {isSpinning ? (
                    <>
                      <Icon name="Loader2" size={24} className="mr-2 animate-spin" />
                      Крутится...
                    </>
                  ) : (
                    <>
                      <Icon name="RotateCcw" size={24} className="mr-2" />
                      Крутить колесо ({spinCost} ОА)
                    </>
                  )}
                </Button>

                {!canSpin && !isSpinning && (
                  <p className="text-sm text-destructive">
                    Недостаточно ОА! Нужно {spinCost} ОА для вращения.
                  </p>
                )}

                {wonPrize && (
                  <Card className="w-full max-w-md border-2 border-accent game-card animate-in fade-in zoom-in duration-500">
                    <CardContent className="p-6 text-center">
                      <div className="text-7xl mb-4 animate-bounce">{wonPrize.icon}</div>
                      <h3 className="text-3xl font-black mb-3 glow-text">Поздравляем!</h3>
                      <p className="text-lg mb-3">Вы выиграли:</p>
                      <p className="text-2xl font-bold text-accent mb-4">{wonPrize.name}</p>
                      <Badge variant={getRarityBadgeVariant(wonPrize.rarity)} className="text-sm px-4 py-1">
                        {wonPrize.rarity}
                      </Badge>
                    </CardContent>
                  </Card>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="game-card border-2 border-accent/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Sparkles" size={24} className="text-accent" />
                <span>Очки активности</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-5xl font-black text-accent mb-2">{activityPoints}</div>
                <p className="text-sm text-muted-foreground">Доступно ОА</p>
              </div>
              <div className="text-center pt-4 border-t">
                <div className="text-2xl font-bold mb-1">{spinCost} ОА</div>
                <p className="text-sm text-muted-foreground">За одно вращение</p>
              </div>
              <div className="pt-4 border-t space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Доступно вращений:</span>
                  <span className="font-bold text-accent">{Math.floor(activityPoints / spinCost)}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <Icon name="Info" size={16} className="mr-2" />
                Как получить ОА?
              </Button>
            </CardContent>
          </Card>

          <Card className="game-card">
            <CardHeader>
              <CardTitle>🎁 Призы и шансы</CardTitle>
              <CardDescription>Вероятность выпадения</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {prizes.map((prize) => (
                <div key={prize.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full ${prize.color} flex items-center justify-center text-xl shadow-md`}>
                      {prize.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{prize.name}</div>
                      <div className="text-xs text-muted-foreground">{prize.rarity}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="font-mono font-bold">
                    {prize.chance}%
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="game-card">
            <CardHeader>
              <CardTitle>📜 Как это работает</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="mt-0.5 text-accent flex-shrink-0" />
                <span>Одно вращение стоит {spinCost} ОА</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="mt-0.5 text-accent flex-shrink-0" />
                <span>ОА зарабатываются за игровое время на сервере</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="mt-0.5 text-accent flex-shrink-0" />
                <span>Премиум статус увеличивает получение ОА на 50%</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="mt-0.5 text-accent flex-shrink-0" />
                <span>Призы добавляются в инвентарь автоматически</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="mt-0.5 text-accent flex-shrink-0" />
                <span>Цвет сектора показывает редкость приза</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
