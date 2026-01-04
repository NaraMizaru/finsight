import {TransactionSummary} from "@/modules/finance/components/transaction-summary";
import {TransactionFilters} from "@/modules/finance/components/transaction-filter";
import {TransactionList} from "@/modules/finance/components/transaction-list";

export default function ModuleFinanceTransactionsPage() {
    return (
        <div className={'space-y-6'}>
            <TransactionSummary/>
            <TransactionFilters/>
            <TransactionList/>
        </div>
    )
}