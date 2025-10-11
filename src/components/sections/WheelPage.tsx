import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Prize {
  id: number;
  name: string;
  color: string;
  textColor: string;
  rarity: string;
  icon: string;
}

export default function WheelPage() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState<Prize | null>(null);
  const [activityPoints, setActivityPoints] = useState(129.5);
  const spinCost = 100;
  const [history, setHistory] = useState<Prize[]>([]);

  const prizes: Prize[] = [
    { id: 1, name: 'Яйцо Карно', color: '#2B5BA8', textColor: '#FFFFFF', rarity: 'Редкий', icon: '🥚' },
    { id: 2, name: 'Тираннозавр', color: '#4A90E2', textColor: '#FFFFFF', rarity: 'Легендарный', icon: '🦖' },
    { id: 3, name: '50 DC', color: '#1E88E5', textColor: '#FFFFFF', rarity: 'Необычный', icon: '💰' },
    { id: 4, name: '1500 осколков', color: '#2196F3', textColor: '#FFFFFF', rarity: 'Обычный', icon: '💎' },
    { id: 5, name: 'Шантунгозавр', color: '#1E3A5F', textColor: '#FFFFFF', rarity: 'Редкий', icon: '🦕' },
    { id: 6, name: 'Яйцо синих', color: '#1A237E', textColor: '#FFFFFF', rarity: 'Редкий', icon: '🥚' },
    { id: 7, name: '200 DC', color: '#7B1FA2', textColor: '#FFFFFF', rarity: 'Необычный', icon: '💸' },
    { id: 8, name: 'Мешочек еды', color: '#6A1B9A', textColor: '#FFFFFF', rarity: 'Обычный', icon: '🎒' },
    { id: 9, name: 'Динозавр 2 тип', color: '#4A148C', textColor: '#FFFFFF', rarity: 'Редкий', icon: '🦴' },
    { id: 10, name: 'Восстановление здоровья', color: '#7CB342', textColor: '#FFFFFF', rarity: 'Обычный', icon: '💊' },
    { id: 11, name: 'Корм Биг 1-4', color: '#689F38', textColor: '#FFFFFF', rarity: 'Обычный', icon: '🍖' },
    { id: 12, name: 'Яхонтовый 1 ном 1-4', color: '#558B2F', textColor: '#FFFFFF', rarity: 'Редкий', icon: '💎' },
    { id: 13, name: 'Премиум 1 день', color: '#43A047', textColor: '#FFFFFF', rarity: 'Необычный', icon: '👑' },
    { id: 14, name: 'Медальон 2 или', color: '#81C784', textColor: '#000000', rarity: 'Редкий', icon: '🏅' },
    { id: 15, name: 'Случайный руд', color: '#4DB6AC', textColor: '#FFFFFF', rarity: 'Обычный', icon: '⛏️' },
    { id: 16, name: 'Аптоназавр', color: '#26A69A', textColor: '#FFFFFF', rarity: 'Легендарный', icon: '🦕' },
  ];

  const spinWheel = () => {
    if (isSpinning || activityPoints < spinCost) return;

    setIsSpinning(true);
    setWonPrize(null);
    setActivityPoints(prev => prev - spinCost);

    const selectedPrize = prizes[Math.floor(Math.random() * prizes.length)];

    const segmentAngle = 360 / prizes.length;
    const prizeIndex = prizes.findIndex(p => p.id === selectedPrize.id);
    const targetAngle = 360 * 5 + (prizeIndex * segmentAngle) + (segmentAngle / 2);
    
    setRotation(targetAngle);

    setTimeout(() => {
      setIsSpinning(false);
      setWonPrize(selectedPrize);
      setHistory(prev => [selectedPrize, ...prev.slice(0, 9)]);
    }, 5000);
  };

  const canSpin = activityPoints >= spinCost && !isSpinning;

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-5xl font-black">Колесо удачи</h2>
        <p className="text-xl text-muted-foreground">Сезон Аллозавра до 12 октября 23:59</p>
      </div>

      <Card className="game-card bg-muted/30 border-2">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Очки активности:</div>
              <div className="text-3xl font-black text-primary">{activityPoints.toFixed(1)}</div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                size="lg"
                onClick={spinWheel}
                disabled={!canSpin}
                className="game-button px-8 py-6 text-lg font-bold"
              >
                {isSpinning ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Крутится...
                  </>
                ) : (
                  <>
                    Прокрутить колесо X1 - {spinCost} ОА
                  </>
                )}
              </Button>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="fast" className="w-4 h-4" />
                <label htmlFor="fast" className="text-sm text-muted-foreground">Быстрая прокрутка</label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="game-card">
            <CardContent className="p-8">
              <div className="flex flex-col items-center space-y-6">
                <div className="relative w-[500px] h-[500px]">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 z-20">
                    <div className="relative">
                      <div className="w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[48px] border-t-red-500 drop-shadow-2xl"></div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-white"></div>
                    </div>
                  </div>
                  
                  <div 
                    className="w-full h-full rounded-full relative shadow-2xl overflow-hidden"
                    style={{
                      transform: `rotate(${-rotation}deg)`,
                      transition: isSpinning ? 'transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none'
                    }}
                  >
                    {prizes.map((prize, index) => {
                      const segmentAngle = 360 / prizes.length;
                      const startAngle = index * segmentAngle;
                      const midAngle = startAngle + segmentAngle / 2;
                      
                      const x1 = 50 + 50 * Math.cos((startAngle - 90) * Math.PI / 180);
                      const y1 = 50 + 50 * Math.sin((startAngle - 90) * Math.PI / 180);
                      const x2 = 50 + 50 * Math.cos((startAngle + segmentAngle - 90) * Math.PI / 180);
                      const y2 = 50 + 50 * Math.sin((startAngle + segmentAngle - 90) * Math.PI / 180);
                      
                      return (
                        <div
                          key={prize.id}
                          className="absolute w-full h-full"
                          style={{
                            backgroundColor: prize.color,
                            clipPath: `polygon(50% 50%, ${x1}% ${y1}%, ${x2}% ${y2}%)`
                          }}
                        >
                          <div 
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                            style={{
                              transform: `rotate(${midAngle}deg) translateY(-170px)`,
                              color: prize.textColor
                            }}
                          >
                            <div className="text-3xl mb-1 drop-shadow-lg">{prize.icon}</div>
                            <div 
                              className="text-[11px] font-bold whitespace-nowrap drop-shadow-md leading-tight"
                              style={{ 
                                writingMode: index % 2 === 0 ? 'vertical-rl' : 'horizontal-tb',
                                textOrientation: index % 2 === 0 ? 'mixed' : 'initial'
                              }}
                            >
                              {prize.name}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full border-8 border-gray-200 flex items-center justify-center text-2xl font-black shadow-2xl z-10">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 font-bold">Крутить</div>
                    </div>
                  </div>
                </div>

                {wonPrize && (
                  <Card className="w-full max-w-md border-4 border-primary game-card animate-in fade-in zoom-in duration-500">
                    <CardContent className="p-8 text-center">
                      <div className="text-7xl mb-4 animate-bounce">{wonPrize.icon}</div>
                      <h3 className="text-4xl font-black mb-3 glow-text">Поздравляем!</h3>
                      <p className="text-lg mb-3">Вы выиграли:</p>
                      <p className="text-3xl font-bold text-primary mb-4">{wonPrize.name}</p>
                      <Badge className="text-sm px-4 py-1" style={{ backgroundColor: wonPrize.color }}>
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
          <Card className="game-card">
            <CardHeader>
              <CardTitle>Как заработать очки?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span>Удорожайте получение очков</span>
              </div>
            </CardContent>
          </Card>

          <Card className="game-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Базовое</CardTitle>
                <Button size="sm" variant="outline">
                  Коробов <Badge className="ml-2 bg-yellow-500">NEW</Badge>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-center p-6 border-2 border-dashed rounded-lg">
                <Icon name="Package" size={48} className="mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Выберите категорию призов</p>
              </div>
            </CardContent>
          </Card>

          <Card className="game-card">
            <CardHeader>
              <CardTitle>История выигрышей</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {history.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  <Icon name="Clock" size={32} className="mx-auto mb-2 opacity-50" />
                  <p>Пока нет выигрышей</p>
                </div>
              ) : (
                history.map((prize, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-muted/30">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                      style={{ backgroundColor: prize.color }}
                    >
                      {prize.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{prize.name}</div>
                      <div className="text-xs text-muted-foreground">{prize.rarity}</div>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          <Card className="game-card">
            <CardHeader>
              <CardTitle>🎁 Доступные призы</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
              {prizes.map((prize) => (
                <div key={prize.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-lg"
                    style={{ backgroundColor: prize.color }}
                  >
                    {prize.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-xs">{prize.name}</div>
                    <div className="text-[10px] text-muted-foreground">{prize.rarity}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
