import {Button} from "@/core/components/ui/button";

export function SettingsDanger() {
    return (
        <div className="rounded-2xl p-6 border border-destructive/30 bg-destructive/5">
            <h3 className="font-medium text-destructive mb-4">Danger Zone</h3>

            <Button variant="destructive" size="sm">
                Reset All Data
            </Button>
        </div>
    );
}
