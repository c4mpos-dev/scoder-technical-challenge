import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "../../Input";

const personalInfoSchema = z.object({
    fullName: z.string().min(3, "Digite seu nome completo"),
    email: z.string().email("Email inválido"),
    phone: z
        .string()
        .min(10, "Digite um telefone válido")
        .max(15)
        .regex(/^\+?\d+$/, "Telefone deve conter só números e opcional +"),
});

type PersonalInfoForm = z.infer<typeof personalInfoSchema>;

interface PersonalInfoStepProps {
    onNext: () => void;
}

export function PersonalInfoStep({ onNext }: PersonalInfoStepProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PersonalInfoForm>({
        resolver: zodResolver(personalInfoSchema),
    });

    const onSubmit = (data: PersonalInfoForm) => {
        console.log("Dados pessoais:", data);
        onNext();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
            <Input
                label="Nome Completo"
                placeholder="Seu nome completo"
                error={errors.fullName?.message}
                {...register("fullName")}
            />
            <Input
                label="Email"
                placeholder="email@exemplo.com"
                error={errors.email?.message}
                {...register("email")}
            />
            <Input
                label="Telefone"
                placeholder="+5511999999999"
                error={errors.phone?.message}
                {...register("phone")}
            />
            <button
                type="submit"
                className="py-3 text-white font-bold rounded-xl bg-gradient-to-r from-purple-700 to-pink-500 hover:to-purple-700 hover:cursor-pointer transition-all duration-300"
            >
                Próximo
            </button>
        </form>
    );
}