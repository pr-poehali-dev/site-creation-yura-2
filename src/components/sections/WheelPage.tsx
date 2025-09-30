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
  const [balance] = useState(500);
  const [spinsLeft] = useState(3);

  const prizes: Prize[] = [
    { id: 1, name: '200 рублей', color: 'bg-yellow-500', rarity: 'Легендарный', chance: 5, icon: '💰' },
    { id: 2, name: 'Спинозавр', color: 'bg-purple-600', rarity: 'Эпический', chance: 10, icon: '🦖' },
    { id: 3, name: 'Гигантозавр', color: 'bg-red-600', rarity: 'Редкий', chance: 15, icon: '🦕' },
    { id: 4, name: 'Корм Биг', color: 'bg-blue-500', rarity: 'Необычный', chance: 30, icon: '🍖' },
    { id: 5, name: '100 душ', color: 'bg-green-500', rarity: 'Обычный', chance: 40, icon: '👻' }
  ];

  const spinWheel = () => {
    if (isSpinning || spinsLeft === 0) return;

    setIsSpinning(true);
    setWonPrize(null);

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

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">🎡 Колесо удачи</h2>
        <p className="text-muted-foreground">Испытай свою удачу и выиграй ценные призы!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col items-center space-y-6">
                <div className="relative w-96 h-96">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 z-10">
                    <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-primary"></div>
                  </div>
                  
                  <div 
                    className="w-full h-full rounded-full border-8 border-primary overflow-hidden relative"
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
                            <div className="text-4xl mb-2">{prize.icon}</div>
                            <div className="text-sm whitespace-nowrap">{prize.name}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-full border-4 border-background flex items-center justify-center text-2xl font-bold shadow-lg">
                    🎯
                  </div>
                </div>

                <Button 
                  size="lg" 
                  onClick={spinWheel}
                  disabled={isSpinning || spinsLeft === 0}
                  className="w-full max-w-xs text-lg py-6"
                >
                  {isSpinning ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Крутится...
                    </>
                  ) : (
                    <>
                      <Icon name="RotateCcw" size={20} className="mr-2" />
                      Крутить колесо (50 🪙)
                    </>
                  )}
                </Button>

                {wonPrize && (
                  <Card className="w-full max-w-md border-primary">
                    <CardContent className="p-6 text-center">
                      <div className="text-6xl mb-4">{wonPrize.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">Поздравляем!</h3>
                      <p className="text-lg mb-3">Вы выиграли: <span className="font-bold text-primary">{wonPrize.name}</span></p>
                      <Badge variant={getRarityBadgeVariant(wonPrize.rarity)} className="text-sm">
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
          <Card>
            <CardHeader>
              <CardTitle>💰 Ваш баланс</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{balance} 🪙</div>
                <p className="text-sm text-muted-foreground">Доступно монет</p>
              </div>
              <div className="text-center pt-4 border-t">
                <div className="text-3xl font-bold text-accent mb-2">{spinsLeft}</div>
                <p className="text-sm text-muted-foreground">Бесплатных вращений</p>
              </div>
              <Button variant="outline" className="w-full">
                <Icon name="Plus" size={16} className="mr-2" />
                Пополнить баланс
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎁 Призы и шансы</CardTitle>
              <CardDescription>Вероятность выпадения</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {prizes.map((prize) => (
                <div key={prize.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full ${prize.color} flex items-center justify-center text-xl`}>
                      {prize.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{prize.name}</div>
                      <div className="text-xs text-muted-foreground">{prize.rarity}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="font-mono">
                    {prize.chance}%
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📜 Правила</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="mt-0.5 text-primary" />
                <span>Одно вращение стоит 50 монет</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="mt-0.5 text-primary" />
                <span>3 бесплатных вращения каждый день</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="mt-0.5 text-primary" />
                <span>Призы приходят автоматически</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="mt-0.5 text-primary" />
                <span>Цвет показывает редкость приза</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}