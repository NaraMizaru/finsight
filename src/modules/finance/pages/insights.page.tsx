import {InsightSummary} from "@/modules/finance/components/insight-summary";
import {InsightCard} from "@/modules/finance/components/insight-card";
import {InsightRecommendation} from "@/modules/finance/components/insight-recommendation";

export default function ModuleFinanceInsightsPage() {
    return (
        <div className={'space-y-6'}>
            <InsightSummary/>

            <div className="grid gap-6 md:grid-cols-2">
                <InsightCard
                    title="Spending Alert"
                    description="Your food expenses increased by 22% compared to last month."
                    tone="warning"
                />
                <InsightCard
                    title="Savings Opportunity"
                    description="You could save $320/month by optimizing subscriptions."
                    tone="success"
                />
            </div>

            <InsightRecommendation/>
        </div>
    )
}