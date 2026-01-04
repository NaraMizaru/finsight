import {BudgetSummary} from "@/modules/finance/components/budget-summary";
import {BudgetCard} from "@/modules/finance/components/budget-card";

const ModuleFinanceBudgetsPage = () => {
    return (
        <div className={'space-y-6'}>
            <BudgetSummary/>

            <BudgetCard
                category="Food & Drinks"
                spent={1200}
                limit={2000}
                color="bg-orange-400"
            />
        </div>
    )
}

export default ModuleFinanceBudgetsPage