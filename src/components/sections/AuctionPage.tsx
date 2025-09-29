import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AuctionPage() {
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
}