import FeesSection from "@/components/resgisterPage/FeesSection";
import BankDetailsSection from "@/components/resgisterPage/BankDetailsSection";
import RegistrationSteps from "@/components/resgisterPage/RegistrationSteps";
export default function Register() {
    return(
        <>
            <RegistrationSteps />
            <FeesSection />
            <BankDetailsSection />
        </>
    )
}