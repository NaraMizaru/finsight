'use client'

import {navLinks} from "@/core/config/nav";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {cn} from "@/lib/utils";

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="flex h-full flex-col p-4">
            <div className="mb-6 text-xl font-semibold">
                FinSight<span className="text-primary">.</span>
            </div>

            <nav className={'px-4 space-y-2 text-sm'}>
                {navLinks.map((item, i) => {
                    const active = pathname === item.href;

                    return (
                        <Link
                            key={i}
                            href={item.href}
                            className={cn("flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-all",
                                "hover:bg-primary/10",
                                active &&
                                "bg-primary/15 text-primary shadow-inner"
                            )}
                        >
                            <item.icon className="h-4 w-4"/>
                            {item.label}
                        </Link>
                    )
                })}
            </nav>

            <div className="mt-auto text-xs text-muted-foreground">
                v0.1 FinSight
            </div>
        </div>
    )
}