import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Location {
  id: number;
  name: string;
  type: string;
  x: number;
  y: number;
  description: string;
  icon: string;
  color: string;
}

export default function MapPage() {
  const [coordinates, setCoordinates] = useState('');
  const [playerPosition, setPlayerPosition] = useState<{ x: number; y: number } | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const locations: Location[] = [
    { id: 1, name: 'Twins', type: 'water', x: 25, y: 30, description: 'Два больших озера с пресной водой', icon: '💧', color: 'bg-blue-500' },
    { id: 2, name: 'Great Lake', type: 'water', x: 50, y: 45, description: 'Крупнейшее озеро на карте', icon: '🌊', color: 'bg-blue-600' },
    { id: 3, name: 'Swamp', type: 'water', x: 70, y: 60, description: 'Болотистая местность', icon: '🐸', color: 'bg-green-600' },
    { id: 4, name: 'River Delta', type: 'water', x: 15, y: 70, description: 'Дельта реки с множеством рукавов', icon: '🏞️', color: 'bg-cyan-500' },
    { id: 5, name: 'Center Lake', type: 'water', x: 48, y: 52, description: 'Центральное озеро', icon: '💧', color: 'bg-blue-500' },
    
    { id: 6, name: 'Titan', type: 'landmark', x: 35, y: 40, description: 'Гигантская скала посреди озера', icon: '🗿', color: 'bg-gray-600' },
    { id: 7, name: 'Radio Tower', type: 'landmark', x: 60, y: 35, description: 'Радиовышка на холме', icon: '📡', color: 'bg-gray-500' },
    { id: 8, name: 'Ruins', type: 'landmark', x: 45, y: 25, description: 'Древние руины', icon: '🏛️', color: 'bg-amber-600' },
    { id: 9, name: 'Bridge', type: 'landmark', x: 55, y: 48, description: 'Старый мост через реку', icon: '🌉', color: 'bg-gray-600' },
    { id: 10, name: 'Caves', type: 'landmark', x: 72, y: 38, description: 'Система пещер', icon: '🕳️', color: 'bg-stone-700' },
    
    { id: 11, name: 'North Plains', type: 'area', x: 50, y: 20, description: 'Открытые равнины на севере', icon: '🌾', color: 'bg-yellow-600' },
    { id: 12, name: 'Deep Forest', type: 'area', x: 30, y: 55, description: 'Густой лес', icon: '🌲', color: 'bg-green-700' },
    { id: 13, name: 'Highlands', type: 'area', x: 75, y: 25, description: 'Горная местность', icon: '⛰️', color: 'bg-stone-600' },
    { id: 14, name: 'Valley', type: 'area', x: 40, y: 65, description: 'Долина между холмами', icon: '🏞️', color: 'bg-lime-600' },
    { id: 15, name: 'Coastal Area', type: 'area', x: 10, y: 50, description: 'Прибрежная зона', icon: '🏖️', color: 'bg-sand-500' },
    
    { id: 16, name: 'South Spawn', type: 'spawn', x: 50, y: 80, description: 'Точка респавна юг', icon: '🎯', color: 'bg-red-500' },
    { id: 17, name: 'North Spawn', type: 'spawn', x: 50, y: 15, description: 'Точка респавна север', icon: '🎯', color: 'bg-red-500' },
    { id: 18, name: 'East Spawn', type: 'spawn', x: 85, y: 50, description: 'Точка респавна восток', icon: '🎯', color: 'bg-red-500' },
    { id: 19, name: 'West Spawn', type: 'spawn', x: 15, y: 50, description: 'Точка респавна запад', icon: '🎯', color: 'bg-red-500' },
    
    { id: 20, name: 'Hunter Territory', type: 'danger', x: 65, y: 42, description: 'Зона активности хищников', icon: '☠️', color: 'bg-red-700' },
    { id: 21, name: 'Safe Zone', type: 'safe', x: 28, y: 48, description: 'Относительно безопасная зона', icon: '🛡️', color: 'bg-emerald-600' }
  ];

  const parseCoordinates = (input: string) => {
    const match = input.match(/-?\d+/g);
    if (match && match.length >= 2) {
      const lat = parseInt(match[0]);
      const long = parseInt(match[1]);
      
      const x = ((long + 500) / 1000) * 100;
      const y = ((lat + 500) / 1000) * 100;
      
      setPlayerPosition({ x, y });
    }
  };

  const handleCoordinateSubmit = () => {
    parseCoordinates(coordinates);
  };

  const filteredLocations = selectedFilter === 'all' 
    ? locations 
    : locations.filter(loc => loc.type === selectedFilter);

  const locationTypes = [
    { id: 'all', name: 'Все', icon: '🗺️' },
    { id: 'water', name: 'Водоемы', icon: '💧' },
    { id: 'landmark', name: 'Ориентиры', icon: '🗿' },
    { id: 'area', name: 'Зоны', icon: '🌲' },
    { id: 'spawn', name: 'Спавны', icon: '🎯' },
    { id: 'danger', name: 'Опасно', icon: '☠️' },
    { id: 'safe', name: 'Безопасно', icon: '🛡️' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">🗺️ Карта TheIsle V3</h2>
        <p className="text-muted-foreground">Интерактивная карта 15x15 км с ключевыми локациями</p>
      </div>

      <Tabs defaultValue="map" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="map">Карта</TabsTrigger>
          <TabsTrigger value="locations">Локации</TabsTrigger>
        </TabsList>

        <TabsContent value="map" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Найти свою позицию</CardTitle>
              <CardDescription>
                Вставьте координаты из игры (нажмите Insert → ASSET LOCATION)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input
                  placeholder="Например: -123, 456 или (Lat: -123,000 Long: 456,000)"
                  value={coordinates}
                  onChange={(e) => setCoordinates(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCoordinateSubmit()}
                />
                <Button onClick={handleCoordinateSubmit}>
                  <Icon name="Search" size={16} className="mr-2" />
                  Найти
                </Button>
              </div>
              {playerPosition && (
                <div className="mt-3 p-3 bg-primary/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span className="text-sm">
                      Ваша позиция отмечена на карте красным маркером 📍
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2 mb-4">
            {locationTypes.map((type) => (
              <Button
                key={type.id}
                variant={selectedFilter === type.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter(type.id)}
              >
                {type.icon} {type.name}
              </Button>
            ))}
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="relative w-full aspect-square bg-gradient-to-br from-green-900/30 via-green-800/30 to-blue-900/30 overflow-hidden">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '10% 10%'
                  }}
                />

                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path d="M 15 70 Q 20 65, 25 60 L 35 55 L 40 50 L 48 45 L 55 48 L 60 52 L 65 55" 
                      stroke="rgba(59, 130, 246, 0.5)" 
                      strokeWidth="0.5" 
                      fill="none" 
                    />
                    
                    <circle cx="25" cy="30" r="4" fill="rgba(59, 130, 246, 0.3)" />
                    <circle cx="50" cy="45" r="6" fill="rgba(59, 130, 246, 0.3)" />
                    <circle cx="70" cy="60" r="5" fill="rgba(34, 197, 94, 0.3)" />
                  </svg>
                </div>

                {filteredLocations.map((location) => (
                  <div
                    key={location.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: `${location.x}%`, top: `${location.y}%` }}
                  >
                    <div className={`w-8 h-8 rounded-full ${location.color} flex items-center justify-center text-sm shadow-lg group-hover:scale-125 transition-transform`}>
                      {location.icon}
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      <div className="bg-card border border-border rounded-lg p-2 shadow-xl whitespace-nowrap">
                        <div className="font-bold text-sm">{location.name}</div>
                        <div className="text-xs text-muted-foreground">{location.description}</div>
                      </div>
                    </div>
                  </div>
                ))}

                {playerPosition && (
                  <div
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                    style={{ left: `${playerPosition.x}%`, top: `${playerPosition.y}%` }}
                  >
                    <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-xl shadow-2xl border-4 border-white">
                      📍
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                      <div className="bg-red-500 text-white rounded-lg px-3 py-1 shadow-xl whitespace-nowrap font-bold">
                        Вы здесь
                      </div>
                    </div>
                  </div>
                )}

                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-xs text-muted-foreground mb-2">Легенда:</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span>Водоемы</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                      <span>Ориентиры</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span>Спавны</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-red-700 rounded-full"></div>
                      <span>Опасно</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-2 shadow-lg text-xs">
                  <div className="font-bold">Размер карты: 15x15 км</div>
                  <div className="text-muted-foreground">TheIsle Legacy V3</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>💡 Советы по навигации</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <Icon name="Info" size={16} className="mt-0.5 text-primary" />
                <span>Нажмите Insert в игре, затем кликните на ASSET LOCATION чтобы скопировать координаты</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Info" size={16} className="mt-0.5 text-primary" />
                <span>Используйте солнце и звезды для ориентирования - Полярная звезда указывает на север</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Info" size={16} className="mt-0.5 text-primary" />
                <span>Запоминайте ориентиры вроде Titan Rock, Radio Tower и мостов</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Info" size={16} className="mt-0.5 text-primary" />
                <span>Красные зоны на карте - места частых встреч с хищниками</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="locations" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((location) => (
              <Card key={location.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-10 h-10 rounded-full ${location.color} flex items-center justify-center text-xl`}>
                        {location.icon}
                      </div>
                      <CardTitle className="text-lg">{location.name}</CardTitle>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {location.type === 'water' && '💧 Вода'}
                      {location.type === 'landmark' && '🗿 Ориентир'}
                      {location.type === 'area' && '🌲 Зона'}
                      {location.type === 'spawn' && '🎯 Спавн'}
                      {location.type === 'danger' && '☠️ Опасно'}
                      {location.type === 'safe' && '🛡️ Безопасно'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{location.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}