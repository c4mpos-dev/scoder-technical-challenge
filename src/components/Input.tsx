import type { InputHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon?: LucideIcon;
    error?: string;
    className?: string;
}

export function Input({ label, icon: Icon, error, className, ...props }: InputProps) {
    return (
        <div className="w-full max-w-sm">
            {label && (
                <label className="block mb-1 text-sm font-medium text-gray-700 font-content">
                    {label}
                </label>
            )}
            <div
                className={clsx(
                    "flex items-center border rounded-lg px-3 py-2 transition",
                    error
                        ? "border-red-500 focus-within:ring-red-500"
                        : "border-gray-300 focus-within:ring-2 focus-within:ring-purple-500",
                    className
                )}
            >
                {Icon && (
                    <Icon className="w-5 h-5 text-gray-400 mr-2" />
                )}
                <input
                    {...props}
                    className="w-full outline-none bg-transparent text-sm text-gray-900 font-content placeholder:text-gray-400"
                />
            </div>
            {error && (
                <p className="text-xs text-red-500 mt-1">{error}</p>
            )}
        </div>
    );
};