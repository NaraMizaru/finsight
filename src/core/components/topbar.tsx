import {ThemeToggle} from "@/core/components/theme-toggle";

export const Topbar = () => {
    return (
        <div className="flex h-14 items-center justify-between px-4">
            <h1 className="font-medium">Dashboard</h1>
            <ThemeToggle/>
        </div>
    )
}