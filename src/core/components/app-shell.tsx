import {ReactNode} from "react";
import {Sidebar} from "@/core/components/sidebar";
import {Topbar} from "@/core/components/topbar";

export const AppShell = ({children}: { children: ReactNode }) => {
    return (
        <div className="min-h-screen bg-background p-4">
            <aside className="fixed inset-y-4 left-4 z-50 hidden w-64 rounded-2xl glass lg:block">
                <Sidebar/>
            </aside>

            <div className="lg:pl-[17rem]">
                <header className="sticky top-4 z-40 mb-4 rounded-2xl glass">
                    <Topbar/>
                </header>

                <main className="rounded-2xl glass p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}