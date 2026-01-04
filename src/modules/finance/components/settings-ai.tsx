import {Switch} from "@/core/components/ui/switch";

export function SettingsAI() {
    return (
        <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="font-medium">AI & Insights</h3>

            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium">Enable AI Insights</p>
                    <p className="text-xs text-muted-foreground">
                        Allow AI to analyze your spending behavior
                    </p>
                </div>
                <Switch/>
            </div>
        </div>
    );
}
