import {SettingsProfile} from "@/modules/finance/components/settings-profile";
import {SettingsPreferences} from "@/modules/finance/components/settings-preferences";
import {SettingsAI} from "@/modules/finance/components/settings-ai";
import {SettingsDanger} from "@/modules/finance/components/settings-danger-zone";

export default function ModuleFinanceSettingsPage() {
    return (
        <div className={'space-y-6'}>
            <SettingsProfile/>
            <SettingsPreferences/>
            <SettingsAI/>
            <SettingsDanger/>
        </div>
    )
}