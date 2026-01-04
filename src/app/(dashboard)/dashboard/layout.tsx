import {ReactNode} from "react";
import {AppShell} from "@/core/components/app-shell";

const DashboardLayout = ({children}: { children: ReactNode }) => {
    return <AppShell>{children}</AppShell>;
}

export default DashboardLayout;