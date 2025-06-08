import type { LucideIcon } from "lucide-react";

interface FeatureProps {
    span: string;
    icon: LucideIcon;
    iconColor: string;
}

export function Feature({ span, icon: Icon, iconColor }: FeatureProps) {
    return (
        <div className="flex items-center gap-2 px-4 py-2 bg-white/20 text-white border border-white/50 rounded-3xl hover:bg-white/35 transition-colors">
            <Icon className={`w-5 h-5 ${iconColor}`} />
            <span className="font-semibold text-sm text-gray-50">
                {span}
            </span>
        </div>
    );
}