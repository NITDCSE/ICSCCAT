export default function RegistrationSteps() {
    return (
        <section id="registration-steps" className="py-6">
            <div className="flex flex-col space-y-6 container mx-auto my-8 px-6 space-y-12 md:grid-cols-2">
                <h4 className="text-4xl font-bold text-center md:text-4xl md:text-left">Registration
                    Steps</h4>
                <ol className="space-y-1 text-gray-500 text-lg list-disc list-inside dark:text-gray-400">
                    <li>
                        Step 1 : Participants need to pay the registration fees according to the category shown in the
                        table below by clicking on Fees Payment
                    </li>
                    <li>
                        Step 2 : After payment take the snapshot of the receipt / registration fee payment.
                        Fill in the required details in the google form and attach the registration fee payment/ receipt
                        and Abstract paper by clicking on the Google Form and click Submit.
                    </li>
                    <li>
                        Step 3 : You will receive an acknowledgment via email once your registration is confirmed.
                    </li>
                </ol>
            </div>
        </section>
    )
}