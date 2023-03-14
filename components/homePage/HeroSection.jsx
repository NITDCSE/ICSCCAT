import Link from "next/link";
import Image from "next/image";
import bg from '@/public/hero-bg.jpg'
import rtcsseSquareLogo from "@/public/rtcsse-logo.png"

export default function HeroSection() {
    return (<>
        <div className="relative flex overflow-x-hidden">
            <div className="py-2 animate-marquee whitespace-nowrap">
                <span className="text-2xl mx-4 text-red-500">Last call for abstract submission: March 17, 2023</span>
                <span className="text-2xl mx-4 text-red-500">Last call for abstract submission: March 17, 2023</span>
                <span className="text-2xl mx-4 text-red-500">Last call for abstract submission: March 17, 2023</span>
            </div>

            <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
                <span className="text-2xl mx-4 text-red-500">Last call for abstract submission: March 17, 2023</span>
                <span className="text-2xl mx-4 text-red-500">Last call for abstract submission: March 17, 2023</span>
                <span className="text-2xl mx-4 text-red-500">Last call for abstract submission: March 17, 2023</span>
            </div>
        </div>
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
                    <div className="flex flex-col items-center">
                        <Image className="w-32 md:w-64 object-contain" src={rtcsseSquareLogo} width={256} quality={100} priority />
                        <div className="flex flex-col mx-auto md:mx-0">
                            <p className="text-2xl text-center md:text-3xl">
                                1<sup>st</sup> International Conference

                            </p>
                            <p className="text-center text-lg text-black md:text-xl">
                                on
                            </p>
                            <h1 className="text-center font-bold text-4xl text-black md:text-5xl">
                                "Recent Trends in Chemical Sciences & Sustainable Energy"
                            </h1>
                            <p className="text-center text-lg text-black md:text-2xl mt-4">
                                24<sup>th</sup> - 25<sup>th</sup> March, 2023
                            </p>
                        </div>
                    </div>
                    <div className="flex pt-8 justify-center">
                        <Link href="/register"
                            className="p-3 pt-3 text-xl uppercase text-primary05 bg-primaryRegular rounded-full baseline hover:bg-primary80 md:block px-6">Register
                            Here
                        </Link>
                    </div>
                </div>
                <Link
                    href="/contact"
                    className="flex px-8 md:px-32 lg:px-64 flex-col w-full justify-between space-y-8 space-x-0 absolute left-0 sm:space-y-0 sm:space-x-12 -bottom-48 md:-bottom-14 sm:flex-row">
                    <div className="block flex-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">Venue</h5>
                        <p className="font-normal text-lg text-center text-gray-700">
                            Auditorium, Administrative Block <br></br> National Institute of Technology Delhi<br></br> Plot No. FA7, Zone, P1, GT Karnal Road, Delhi, 110036
                        </p>
                    </div>
                </Link>
            </div>
        </section>
        <div className="w-full my-48 md:my-24" />
    </>)
}