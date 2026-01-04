const ModuleDashboardPage = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <p className="text-muted-foreground">
                    Overview of your financial health
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="glass rounded-2xl p-6">
                    <p className="text-sm text-muted-foreground">Total Balance</p>
                    <p className="text-2xl font-bold mt-2">$12,450</p>
                </div>

                <div className="glass rounded-2xl p-6">
                    <p className="text-sm text-muted-foreground">Monthly Spend</p>
                    <p className="text-2xl font-bold mt-2">Rp. 50.000.000</p>
                </div>

                <div className="glass rounded-2xl p-6">
                    <p className="text-sm text-muted-foreground">AI Insight</p>
                    <p className="mt-2 text-sm">
                        You’re spending 18% more on food this month 🍔
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ModuleDashboardPage