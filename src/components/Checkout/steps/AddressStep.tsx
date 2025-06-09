import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "../../Input";

const schema = z.object({
    street: z.string().min(1, "Rua obrigatória"),
    number: z.string().min(1, "Número obrigatório"),
    city: z.string().min(1, "Cidade obrigatória"),
});

type FormData = z.infer<typeof schema>;

interface Props {
    onNext: () => void;
    onBack: () => void;
}

export function AddressStep({ onNext, onBack }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = () => {
        onNext();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input label="Rua" {...register("street")} error={errors.street?.message} />
            <Input label="Número" {...register("number")} error={errors.number?.message} />
            <Input label="Cidade" {...register("city")} error={errors.city?.message} />

            <div className="flex justify-between">
                <button type="button" onClick={onBack} className="py-3 px-4 text-white font-bold rounded-xl bg-gradient-to-r from-purple-700 to-pink-500 hover:to-purple-700 hover:cursor-pointer transition-all duration-300">
                    Voltar
                </button>
                <button type="submit" className="py-3 px-4 text-white font-bold rounded-xl bg-gradient-to-r from-purple-700 to-pink-500 hover:to-purple-700 hover:cursor-pointer transition-all duration-300">
                    Próximo
                </button>
            </div>
        </form>
    );
}
