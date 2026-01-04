import {Input} from "@/core/components/ui/input";
import {Button} from "@/core/components/ui/button";

export function SettingsProfile() {
    return (
        <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="font-medium">Profile</h3>

            <div className="grid gap-4 md:grid-cols-2">
                <Input placeholder="Full name"/>
                <Input placeholder="Email address"/>
            </div>

            <Button size="sm">Save changes</Button>
        </div>
    );
}
