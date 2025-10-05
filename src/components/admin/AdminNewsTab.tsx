import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  published: boolean;
}

interface AdminNewsTabProps {
  news: NewsItem[];
}

export default function AdminNewsTab({ news }: AdminNewsTabProps) {
  return (
    <Card className="game-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Управление новостями</CardTitle>
          <Button size="sm" className="game-button">
            <Icon name="Plus" size={16} className="mr-2" />
            Создать новость
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {news.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-bold">{item.title}</h4>
                      {item.published ? (
                        <Badge className="bg-green-500">Опубликовано</Badge>
                      ) : (
                        <Badge variant="secondary">Черновик</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{item.date}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Icon name="Edit" size={14} className="mr-1" />
                      Редактировать
                    </Button>
                    <Button size="sm" variant={item.published ? "secondary" : "default"}>
                      <Icon name={item.published ? "EyeOff" : "Eye"} size={14} className="mr-1" />
                      {item.published ? 'Снять' : 'Опубликовать'}
                    </Button>
                    <Button size="sm" variant="destructive">
                      <Icon name="Trash2" size={14} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="border-2 border-dashed">
            <CardContent className="p-4">
              <h4 className="font-bold mb-4">Создать новость</h4>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Заголовок</Label>
                  <Input placeholder="Заголовок новости" />
                </div>
                <div className="space-y-2">
                  <Label>Содержание</Label>
                  <Textarea placeholder="Текст новости" rows={5} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Дата публикации</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Тег</Label>
                    <select className="w-full p-2 rounded-md border bg-background">
                      <option>Обновление</option>
                      <option>События</option>
                      <option>Гайд</option>
                      <option>Новости</option>
                    </select>
                  </div>
                </div>
                <Button className="game-button">
                  <Icon name="Send" size={16} className="mr-2" />
                  Опубликовать новость
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
