import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

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
  return (
    <>
      {/* Main Navigation */}
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
    </>
  );
}