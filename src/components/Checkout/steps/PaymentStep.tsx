import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../../Input";

const schema = z.object({
    cardNumber: z.string().min(16, "Número do cartão inválido"),
    expiry: z.string().date("Data de validade inválida"),
    cvv: z.string().min(3, "CVV inválido"),
});

type FormData = z.infer<typeof schema>;

interface Props {
    onNext: () => void;
    onBack: () => void;
}

export function PaymentStep({ onNext, onBack }: Props) {
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
            <Input label="Número do Cartão" {...register("cardNumber")} error={errors.cardNumber?.message} type="number" />
            <Input label="Validade (MM/AA)" {...register("expiry")} error={errors.expiry?.message} type="date"/>
            <Input label="CVV" {...register("cvv")} error={errors.cvv?.message} type="number"/>

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
