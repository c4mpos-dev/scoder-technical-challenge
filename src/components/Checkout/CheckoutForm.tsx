import { useState } from "react";
import { PersonalInfoStep } from "./steps/PersonalInfoStep";
import { AddressStep } from "./steps/AddressStep";
import { PaymentStep } from "./steps/PaymentStep";
import { ConfirmationStep } from "./steps/ConfirmationStep";
import { OrderSummary } from "./OrderSummary";

export function CheckoutForm() {
    const [step, setStep] = useState(1);

    return (
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-4 order-1">
                <div className="flex flex-wrap justify-between text-sm text-gray-600 mb-4">
                    <span className={step === 1 ? "font-bold" : ""}>1. Dados</span>
                    <span className={step === 2 ? "font-bold" : ""}>2. Endereço</span>
                    <span className={step === 3 ? "font-bold" : ""}>3. Pagamento</span>
                    <span className={step === 4 ? "font-bold" : ""}>4. Confirmação</span>
                </div>

                {step === 1 && <PersonalInfoStep onNext={() => setStep(2)} />}
                {step === 2 && (
                    <AddressStep onNext={() => setStep(3)} onBack={() => setStep(1)} />
                )}
                {step === 3 && (
                    <PaymentStep onNext={() => setStep(4)} onBack={() => setStep(2)} />
                )}
                {step === 4 && <ConfirmationStep onBack={() => setStep(3)} />}
            </div>

            <div className="flex justify-center order-2 w-full md:w-auto">
                <OrderSummary />
            </div>
        </div>
    );
}
