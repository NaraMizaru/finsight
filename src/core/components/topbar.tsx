'use client'

import {ThemeToggle} from "@/core/components/theme-toggle";
import {Sheet, SheetContent, SheetTrigger} from "@/core/components/ui/sheet";
import {Button} from "@/core/components/ui/button";
import {Menu} from "lucide-react";
import {Sidebar} from "@/core/components/sidebar";
import {usePathname} from "next/navigation";
import {navLinks} from "@/core/config/nav";

export const Topbar = () => {
    const pathname = usePathname();
    const current = navLinks.find((link) => pathname === link.href) ?? navLinks[0];

    return (
        <div className="flex h-14 items-center justify-between px-4">
            <div className="flex items-center gap-2">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="ghost" className="lg:hidden">
                            <Menu className="h-5 w-5"/>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="left" className="glass border-none">
                        <Sidebar/>
                    </SheetContent>
                </Sheet>

                <h1 className="font-medium">{current.label}</h1>
            </div>

            <div>
                <ThemeToggle/>
            </div>
        </div>
    )
}