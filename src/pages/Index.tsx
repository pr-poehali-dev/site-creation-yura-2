import { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HomePage from '@/components/sections/HomePage';
import ShopPage from '@/components/sections/ShopPage';
import InventoryPage from '@/components/sections/InventoryPage';
import AuctionPage from '@/components/sections/AuctionPage';
import ProfilePage from '@/components/sections/ProfilePage';

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
        return <InventoryPage inventoryItems={inventoryItems} getRarityColor={getRarityColor} />;
      case 'shop':
        return <ShopPage shopItems={shopItems} getRarityColor={getRarityColor} />;
      case 'profile':
        return <ProfilePage playerStats={playerStats} myDinosaurs={myDinosaurs} />;
      case 'auction':
        return <AuctionPage />;
      default:
        return <HomePage topPlayers={topPlayers} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        navigationItems={navigationItems} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
}