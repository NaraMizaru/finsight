import {cn} from "@/lib/utils";

type InsightCardProps = {
    title: string;
    description: string;
    tone: "warning" | "success" | "info";
}

export function InsightCard({title, tone, description}: InsightCardProps) {
    return (
        <div
            className={cn(
                "glass rounded-2xl p-6 border-l-4",
                tone === "warning" && "border-yellow-400",
                tone === "success" && "border-green-400",
                tone === "info" && "border-blue-400"
            )}
        >
            <h3 className="font-medium mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
}
