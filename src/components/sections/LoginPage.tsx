import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface LoginPageProps {
  onLogin: (username: string, password: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (username && password) {
        onLogin(username, password);
      } else {
        setError('Введите логин и пароль');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSteamLogin = () => {
    setError('');
    setIsLoading(true);
    setTimeout(() => {
      onLogin('steam_user', 'steam_auth');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="text-6xl">🦕</div>
            <h1 className="text-5xl font-black glow-text">PANGAEA</h1>
          </div>
          <p className="text-xl text-muted-foreground">Войдите в систему</p>
        </div>

        <Card className="game-card border-2 border-primary/30">
          <CardHeader>
            <CardTitle className="text-2xl">Авторизация</CardTitle>
            <CardDescription>Войдите через Steam или используйте логин/пароль</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Button 
              className="w-full game-button text-lg py-6" 
              onClick={handleSteamLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
              ) : (
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M8 12l3 3 5-5"/>
                </svg>
              )}
              Войти через Steam
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">или</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Логин</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Введите логин"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={16} />
                  </Button>
                </div>
              </div>

              {error && (
                <div className="text-sm text-destructive bg-destructive/10 border border-destructive/50 rounded-lg p-3">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full game-button" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Вход...
                  </>
                ) : (
                  <>
                    <Icon name="LogIn" size={20} className="mr-2" />
                    Войти
                  </>
                )}
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Забыли пароль?
              </a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Регистрация
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-muted-foreground">
          <p>Тестовые данные для входа:</p>
          <p className="mt-1">Игрок: <code className="bg-muted px-2 py-1 rounded">player / 123</code></p>
          <p>Админ: <code className="bg-muted px-2 py-1 rounded">admin / admin</code></p>
        </div>
      </div>
    </div>
  );
}
