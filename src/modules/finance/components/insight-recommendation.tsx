export function InsightRecommendation() {
    return (
        <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="font-medium">Recommended Actions</h3>

            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Reduce food budget by 15%</li>
                <li>Set a transport monthly limit</li>
                <li>Cancel unused subscriptions</li>
            </ul>
        </div>
    );
}
