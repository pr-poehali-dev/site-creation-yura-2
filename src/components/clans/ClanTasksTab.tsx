import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface ClanTask {
  id: number;
  title: string;
  description: string;
  reward: string;
  progress: number;
  total: number;
  icon: string;
}

interface ClanTasksTabProps {
  tasks: ClanTask[];
}

export default function ClanTasksTab({ tasks }: ClanTasksTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Клановые задания</CardTitle>
        <CardDescription>Выполняйте задания вместе и получайте награды</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{task.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{task.title}</h3>
                    <Badge variant="outline" className="text-accent">{task.reward}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Прогресс: {task.progress}/{task.total}</span>
                      <span>{Math.round((task.progress / task.total) * 100)}%</span>
                    </div>
                    <Progress value={(task.progress / task.total) * 100} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}