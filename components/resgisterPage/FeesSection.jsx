import Link from "next/link";

export default function FeesSection() {
    return (
        <section id="register" className=" bg-primary10 px-6 py-12 justify-center items-center">
            <div className="container mx-auto my-12 flex items-center justify-between flex-col">
                <Link className="p-3 text-primary05 bg-primaryDark rounded-full baseline hover:bg-primaryLight md:block px-6"
                   href="https://docs.google.com/forms/d/e/1FAIpQLSf1kd1D_Ej5j7vNh99o6Yon3aYnbt8lzbhFSDjrX5jqrQVgWw/viewform">Register
                    Here
                </Link>
            </div>
            <div className="container mx-auto px-6 justify-center items-center">
                <h3 className="text-2xl py-8 font-bold text-center md:text-3xl md:text-left">Registration Fees
                </h3>
                <table className="mx-auto font-bold border-2  mb-8 border-primaryDark w-6/12">
                   
                    <tbody className="text-white text-center">
                    <tr className="bg-primary50 cursor-pointer">
                        
                        <td className="py-3 px-6">UG/PG Student</td>
                        <td className="py-3 px-6"> Rs.500</td>
                    </tr>
                    <tr className="bg-primary50 cursor-pointer">
                        
                        <td className="py-3 px-6">Research Scholar</td>
                        <td className="py-3 px-6">Rs.1000</td>
                    </tr>
                    <tr className="bg-primary50 cursor-pointer">
                        
                        <td className="py-3 px-6">Faculty</td>
                        <td className="py-3 px-6"> Rs.2000</td>
                    </tr>
                    <tr className="bg-primary50 cursor-pointer">
                    
                        <td className="py-3 px-6">Scientist and industrialists</td>
                        <td className="py-3 px-6"> Rs.3000</td>
                    </tr>
                    <tr className="bg-primary50 cursor-pointer">
                        
                        <td className="py-3 px-6">Abroad Participants(Faculty/Research Scholars)</td>
                        <td className="py-3 px-6"> $200/$100</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}