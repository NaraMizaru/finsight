import {formatCurrency} from "@/lib/utils";

export function BudgetSummary() {
    return (
        <div className="grid gap-6 sm:grid-cols-3">
            <SummaryItem label="Total Budget" value={10000000}/>
            <SummaryItem label="Spent" value={20000000}/>
            <SummaryItem label="Remaining" value={300000}/>
        </div>
    );
}

type SummaryItemProps = {
    label: string;
    value: number;
}

function SummaryItem({label, value}: SummaryItemProps) {
    return (
        <div className={'glass rounded-2xl p-6 '}>
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-2xl font-semibold mt-1">{formatCurrency(value)}</p>
        </div>
    );
}