import {cn, formatCurrency} from "@/lib/utils";

const DATA = [
    {id: 1, title: "Food & Drinks", amount: -120, date: "Today"},
    {id: 2, title: "Transport", amount: -45, date: "Yesterday"},
    {id: 3, title: "Salary", amount: 3000, date: "Jun 1"},
];

export function TransactionList() {
    return (
        <div className="glass rounded-2xl divide-y">
            {DATA.map((item) => (
                <TransactionRow key={item.id} {...item} />
            ))}
        </div>
    );
}

type TransactionRowProps = {
    title: string;
    amount: number;
    date: string;
}

function TransactionRow({title, amount, date}: TransactionRowProps) {
    const isIncome = amount > 0;

    return (
        <div className="flex items-center justify-between px-6 py-4 hover:bg-muted/40 transition">
            <div>
                <p className="font-medium">{title}</p>
                <p className="text-xs text-muted-foreground">{date}</p>
            </div>

            <p
                className={cn(
                    "font-semibold",
                    isIncome ? "text-green-500" : "text-red-500"
                )}
            >
                {isIncome ? "+" : "-"} {formatCurrency(Math.abs(amount))}
            </p>
        </div>
    );
}
