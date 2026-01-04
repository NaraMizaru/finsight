import {Input} from "@/core/components/ui/input";
import {Button} from "@/core/components/ui/button";

export function TransactionFilters() {
    return (
        <div className="glass rounded-2xl p-4 flex gap-3">
            <Input placeholder="Search transaction..." className="w-full"/>
            <Button variant="secondary">Category</Button>
            <Button variant="secondary">Date</Button>
        </div>
    );
}
