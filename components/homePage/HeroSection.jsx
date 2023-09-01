import Link from "next/link";
import Image from "next/image";
import bg from '@/public/hero-bg.jpg'
import icsccatLogo from "@/public/iccssat-logo.png"

export default function HeroSection() {
    return (<>
        {/* <div className="relative flex overflow-x-hidden">
            <div className="py-2 animate-marquee whitespace-nowrap">
                <span className="text-2xl mx-4 text-red-500">Registeration Closed</span>
                <span className="text-2xl mx-4 text-red-500">Registeration Closed</span>
                <span className="text-2xl mx-4 text-red-500">Registeration Closed</span>
            </div>

            <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
                <span className="text-2xl mx-4 text-red-500">Registeration Closed</span>
                <span className="text-2xl mx-4 text-red-500">Registeration Closed</span>
                <span className="text-2xl mx-4 text-red-500">Registeration Closed</span>
            </div>
        </div> */}
<section className="bg-no-repeat bg-cover"
    id="hero"
    style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(233, 233, 245, 0.9)), url(${bg.src})`
    }}
>
    <div className="container relative flex flex-col-reverse md:flex-row justify-center items-start px-6 mx-auto pt-12 space-y-8 md:space-y-0 md:justify-start">
        <div className="flex flex-col mb-32 mx-auto items-center">
            <div className="flex flex-col items-center">
                <Image className="w-32 md:w-64 object-contain" src={icsccatLogo} width={256} quality={100} priority />
                <div className="flex flex-col mx-auto md:mx-0">
                    <p className="text-2xl text-center md:text-3xl my-4">
                        1<sup>st</sup> International Conference
                    </p>
                    <p className="text-center text-lg text-white md:text-xl my-4"> {/* Changed text color to white */}
                        on
                    </p>
                    <h1 className="text-center font-bold text-4xl text-white md:text-5xl my-4"> {/* Changed text color to white */}
                        "Secure Cyber Computing & Advanced Technologies"
                    </h1>
                    <p className="text-center text-lg text-white md:text-2xl mt-4"> {/* Changed text color to white */}
                        26<sup>th</sup> - 28<sup>th</sup> April, 2024
                    </p>
                </div>
            </div>
            <div className="flex pt-8 justify-center">
                {/* <Link href="/register"
                    className="p-3 pt-3 text-xl uppercase text-primary05 bg-gray-400 rounded-full baseline md:block px-6 disabled">Registeration Closed
                </Link> */}
            </div>
        </div>
    </div>
</section>
    </>)
}