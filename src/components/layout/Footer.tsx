export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">🦕 PANGAEA</h3>
            <p className="text-sm text-muted-foreground">
              Выживайте в мире динозавров. Охотьтесь, выращивайте потомство и станьте альфа-хищником.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Сообщество</h4>
            <div className="space-y-2 text-sm">
              <div>Discord</div>
              <div>Telegram</div>
              <div>YouTube</div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Поддержка</h4>
            <div className="space-y-2 text-sm">
              <div>Техподдержка</div>
              <div>Правила сервера</div>
              <div>Репортить баги</div>
            </div>
          </div>
        </div>
        <div className="border-t border-border/30 pt-4 mt-8 text-center text-sm text-muted-foreground">
          © 2024 PANGAEA Server. Все права защищены.
        </div>
      </div>
    </footer>
  );
}