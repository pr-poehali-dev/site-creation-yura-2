import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Clan {
  id: number;
  name: string;
  tag: string;
  leader: string;
  members: number;
  maxMembers: number;
  level: number;
  description: string;
  icon: string;
  color: string;
  territory: string;
  founded: string;
}

interface ClanMapTabProps {
  clan: Clan;
}

export default function ClanMapTab({ clan }: ClanMapTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Территория клана</CardTitle>
        <CardDescription>Контролируемые локации: {clan.territory}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden">
          <img 
            src="https://cdn.poehali.dev/files/a38310ff-24f6-4b88-9b16-8ba3227b3b68.png" 
            alt="Clan Territory"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
            <div className="text-6xl animate-pulse">{clan.icon}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}