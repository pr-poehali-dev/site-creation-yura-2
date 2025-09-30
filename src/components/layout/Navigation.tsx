import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface NavigationItem {
  id: string;
  label: string;
  icon: string;
}

interface NavigationProps {
  navigationItems: NavigationItem[];
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ navigationItems, activeSection, setActiveSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="border-b border-primary/20 bg-gradient-to-r from-card via-card/95 to-card backdrop-blur-xl sticky top-0 z-50 shadow-lg shadow-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative flex items-center space-x-3 bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-xl">
                  <div className="text-3xl">🦕</div>
                  <div>
                    <div className="text-xl font-black tracking-wider text-white">TAPKIN</div>
                    <div className="text-xs font-bold text-white/80 -mt-1">SUPREME</div>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:flex items-center space-x-1">
                {navigationItems.slice(0, 5).map((item) => (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "default" : "ghost"}
                    size="lg"
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center space-x-2 font-semibold ${
                      activeSection === item.id 
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30' 
                        : 'hover:bg-muted/50'
                    }`}
                  >
                    <Icon name={item.icon as any} size={18} />
                    <span>{item.label}</span>
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-lg border border-border">
                <Icon name="Coins" size={18} className="text-yellow-500" />
                <span className="font-bold text-lg">12,450</span>
              </div>
              
              <Button className="bg-gradient-to-r from-accent to-green-600 hover:from-accent/90 hover:to-green-600/90 font-bold shadow-lg shadow-accent/30">
                <Icon name="Plus" size={18} className="mr-2" />
                Пополнить
              </Button>
              
              <Button variant="outline" size="icon" className="relative">
                <Icon name="Bell" size={18} />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">3</div>
              </Button>
              
              <Button variant="outline" size="icon" className="hidden md:flex">
                <Icon name="Settings" size={18} />
              </Button>

              <Button 
                variant="outline" 
                size="icon" 
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 bg-card/95 backdrop-blur-xl">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="lg"
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full justify-start ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                      : ''
                  }`}
                >
                  <Icon name={item.icon as any} size={18} className="mr-3" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="border-b border-border/30 bg-gradient-to-r from-muted/30 via-muted/20 to-muted/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide">
              {navigationItems.slice(5).map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 whitespace-nowrap ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-secondary to-purple-600 text-white font-semibold' 
                      : 'hover:bg-muted/50'
                  }`}
                >
                  <Icon name={item.icon as any} size={14} />
                  <span className="text-sm">{item.label}</span>
                </Button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">245 онлайн</span>
              </div>
              <div className="text-muted-foreground">
                Всего игроков: <span className="font-bold text-foreground">8,942</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
