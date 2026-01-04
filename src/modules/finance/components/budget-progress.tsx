type BudgetProgressProps = {
    color: string;
    percent: number;
}

export function BudgetProgress({color, percent}: BudgetProgressProps) {
    return (
        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
            <div
                className={`h-full rounded-full transition-all ${color}`}
                style={{width: `${percent}%`}}
            />
        </div>
    )
}