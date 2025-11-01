import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import SimulatorFrame from "@/components/SimulatorFrame";

export default function Dashboard() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm flex-shrink-0">
        <div className="h-16 px-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">MISIM Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 text-sm">
              Bem-vindo, {user?.name || "Usuário"}!
            </span>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content - Simulator in Fullscreen */}
      <main className="flex-1 overflow-hidden w-full">
        <SimulatorFrame />
      </main>
    </div>
  );
}

