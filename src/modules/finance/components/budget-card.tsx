import {BudgetProgress} from "@/modules/finance/components/budget-progress";
import {formatCurrency} from "@/lib/utils";

type BudgetCardProps = {
    category: string;
    spent: number;
    limit: number;
    color: string;
}

export function BudgetCard({category, spent, limit, color}: BudgetCardProps) {
    const percent = Math.min((spent / limit) * 100, 100);

    return (
        <div className="glass rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="font-medium">{category}</h3>
                <span className="text-sm text-muted-foreground">
                    {formatCurrency(spent)} / {formatCurrency(limit)}
                </span>
            </div>

            <BudgetProgress percent={percent} color={color}/>

            <p className="text-xs text-muted-foreground">
                {Math.round(percent)}% used
            </p>
        </div>
    )
}