import {ArrowLeftRight, LayoutDashboard, Settings, Sparkles, Wallet} from "lucide-react";

export const navLinks = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard
    },
    {
        label: "Budgets",
        href: "/budgets",
        icon: Wallet
    },
    {
        label: "Transactions",
        href: "/transactions",
        icon: ArrowLeftRight,
    },
    {
        label: "Insights",
        href: "/insights",
        icon: Sparkles
    },
    {
        label: "Settings",
        href: "/settings",
        icon: Settings
    }
]