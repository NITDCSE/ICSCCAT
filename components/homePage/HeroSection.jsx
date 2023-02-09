import bg from '@/public/hero-bg.jpg'
import rtcsseSquareLogo from "@/public/rtcsse-logo.png"
import Link from "next/link";
import Image from "next/image";
import nitdLongLogo from "@/public/nitd-logo-labeled-blue.png";
import nitdSquareLogo from "@/public/nitd-logo.png";
import sscduLongLogo from "@/public/sscdu-logo-long.png";
import sscduSquareLogo from "@/public/sscdu-logo.png";

export default function HeroSection() {
    return (<>
        <section className="bg-no-repeat bg-cover"
                 id="hero"
                 style={{
                     backgroundImage: `linear-gradient(to bottom, rgba(233, 233, 245, 0.7), rgba(233, 233, 245, 0.8)), url(${bg.src})`
                 }}
        >
            <div
                className="container relative flex flex-col-reverse md:flex-row justify-center items-start px-6 mx-auto pt-12 space-y-0 md:justify-start"
            >
                <div className="flex flex-col mb-32 mx-auto items-center">
                    <div className="flex flex-col md:flex-row md:space-x-8 items-center">
                        <Image className="w-32 md:w-64 object-contain" src={rtcsseSquareLogo} width={256} quality={100} priority/>
                        <div className="flex flex-col mx-auto md:mx-0">
                            <h1 className="text-lg text-center md:text-xl md:text-left">
                                1st International Conference on
                            </h1>
                            <p className="text-center font-bold text-4xl text-black md:text-5xl md:text-left">
                                Recent Trends in Chemical Sciences & Sustainable Energy
                            </p>
                            <p className="text-center text-lg text-black md:text-2xl md:text-left mt-4">
                                24 - 25 March, 2023
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full py-4 mb-4 items-center space-y-6">
                        <h3 className="text-2xl text-center">Organised By</h3>
                        <div className="flex flex-col space-y-4 md:space-y-auto md:flex-row w-full justify-between md:space-x-6">
                            <a className="m-auto flex flex-col flex-1 items-center space-y-6" target="_blank" href="https://nitdelhi.ac.in/">
                                <p className="text-xs text-center md:text-lg">Department of Applied Sciences</p>
                                <Image src={nitdLongLogo} alt="" className="max-h-12 object-contain"/>
                            </a>
                            <a className="m-auto flex flex-col flex-1 items-center space-y-6" target="_blank" href="https://nitdelhi.ac.in/">
                                <p className="text-xs text-center md:text-lg">Department of Chemistry</p>
                                <Image src={sscduLongLogo} alt="" className="max-h-12 object-contain"/>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Link href="/register"
                              className="p-3 pt-2 text-primary05 bg-primaryRegular rounded-full baseline hover:bg-primary80 md:block px-6">Register
                            Here
                        </Link>
                    </div>
                </div>
                <div
                    className="flex px-8 md:px-32 lg:px-64 flex-col w-full justify-between space-y-8 space-x-0 absolute left-0 sm:space-y-0 sm:space-x-12 -bottom-12 sm:flex-row">
                    <div className="block flex-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Venue</h5>
                        <p className="font-normal text-gray-700">
                            Auditorium, 5th floor, National Institute of Technology, Delhi
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <div class="w-full my-16"/>
    </>)
}