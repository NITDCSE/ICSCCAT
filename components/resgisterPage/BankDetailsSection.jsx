export default function BankDetailsSection() {
    return (
        <section id="bank details" className="container mx-auto px-6 mb-12 justify-center items-center">
            <h3 className="text-2xl py-8 font-bold text-center md:text-3xl md:text-left">Bank Details
            </h3>
            <table className="mx-auto font-bold border-2 border-primaryDark mb-4 my-auto w-6/12">
                
                <tbody className="text-white text-center">
                <tr className="bg-primary50 cursor-pointer">
                 
                    <td className="py-3 px-6">Bank Name :</td>
                    <td className="py-3 px-6"> CANARA BANK</td>
                </tr>
                <tr className="bg-primary50 cursor-pointer">
                    
                    <td className="py-3 px-6">Account Name:</td>
                    <td className="py-3 px-6">NIT DELHI STC CONFERENCE</td>
                </tr>
                <tr className="bg-primary50 cursor-pointer">
                    
                    <td className="py-3 px-6">Account No.</td>
                    <td className="py-3 px-6">2983101006538</td>
                </tr>
                <tr className="bg-primary50 cursor-pointer">
                    
                    <td className="py-3 px-6">IFSC Code</td>
                    <td className="py-3 px-6">CNRB0002983</td>
                </tr>
                </tbody>
            </table>

            <p className="mx-auto text-lg font-bold text-center">*Last Date for registration is March 20, 2023</p>
        </section>
    )
}