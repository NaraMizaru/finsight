export const Sidebar = () => {
    return (
        <div className="h-full p-4">
            <div className="px-2 py-4 text-xl font-semibold">
                FinSight<span className="text-primary">.</span>
            </div>

            <nav className={'px-4 space-y-2 text-sm'}>
                {["Dashboard", "Budgets", "Transactions", "Insights", "Settings"].map(
                    (item) => (
                        <div
                            key={item}
                            className="rounded-lg px-3 py-2 hover:bg-primary/10 cursor-pointer"
                        >
                            {item}
                        </div>
                    )
                )}
            </nav>
        </div>
    )
}