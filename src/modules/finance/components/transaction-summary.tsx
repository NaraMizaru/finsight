export function TransactionSummary() {
    return (
        <div className="glass rounded-2xl p-6 flex justify-between">
            <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-semibold">$2,430 spent</p>
            </div>
            <div className="text-sm text-muted-foreground self-end">
                24 transactions
            </div>
        </div>
    );
}
