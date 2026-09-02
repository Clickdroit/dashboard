import { Header } from "@/components/layout/Header";
import { WidgetGrid } from "@/components/layout/WidgetGrid";
import { ServerPingWidget } from "@/components/widgets/ServerPingWidget";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans p-6 sm:p-10">
      <div className="max-w-7xl mx-auto">
        <Header />

        <main>
          <WidgetGrid>
            {/* Premier widget : Ping de serveur */}
            <ServerPingWidget />

            {/* Emplacement / placeholder pour le prochain widget (commit suivant) */}
            <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-dashed border-neutral-800 hover:border-neutral-700 bg-neutral-900/20 hover:bg-neutral-900/40 transition cursor-pointer group text-center min-h-[220px]">
              <div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-neutral-700 flex items-center justify-center text-neutral-400 group-hover:text-neutral-200 mb-3 transition">
                <Plus className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-neutral-300">
                Nouveau widget
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                Idée pour ton prochain commit
              </p>
            </div>
          </WidgetGrid>
        </main>
      </div>
    </div>
  );
}
