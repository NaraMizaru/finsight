import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/core/components/ui/select";
import {ThemeToggle} from "@/core/components/theme-toggle";

export function SettingsPreferences() {
    return (
        <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="font-medium">Preferences</h3>

            <div className="grid gap-4 md:grid-cols-2">
                <ThemeToggle/>

                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Currency"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="IDR">IDR</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
