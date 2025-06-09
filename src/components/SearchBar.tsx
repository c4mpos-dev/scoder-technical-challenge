// components/SearchBar.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { Input } from "./Input";
import { z } from "zod";

const searchSchema = z.object({
    search: z.string()
        .regex(/^[a-zA-Z0-9\s]*$/, "Digite apenas letras, números e espaços")
});

type SearchSchema = z.infer<typeof searchSchema>;

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SearchSchema>({
        resolver: zodResolver(searchSchema),
    });

    const onSubmit = (data: SearchSchema) => {
        onSearch(data.search.trim());
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
            <Input
                icon={Search}
                onIconClick={() => handleSubmit(onSubmit)()}
                placeholder="Buscar produtos..."
                error={errors.search?.message}
                {...register("search")}
            />
        </form>
    );
}
