import bg from '@/public/hero-bg.jpg'
import Link from "next/link";

export default function HeroSection() {
    return (<>
            <section className="bg-no-repeat bg-cover"
                     id="hero"
                     style={{
                         backgroundImage: `linear-gradient(to right, rgba(233, 233, 245, 0.7), rgba(233, 233, 245, 0.7)), url(${bg.src})`
                     }}
            >
                <div
                    className="container relative flex flex-col-reverse md:flex-row justify-center items-start px-6 mx-auto pt-12 space-y-0 md:justify-start"
                >
                    <div className="flex flex-col mx-auto md:mx-0 md:w-1/2 mb-32 space-y-12">
                        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                            First International Conference on RTCSSE-2023
                        </h1>
                        <p className="text-center max-w-sm text-black md:text-left">The prime objective of the
                            RTCSSE-2023
                            is to
                            serve as a forum for the exchange of ideas and knowledge between individuals working at
                            different
                            frontiers of chemical sciences</p>
                        <div className="flex justify-center md:justify-start">
                            <Link href="/register"
                               className="p-3 pt-2 text-primary05 bg-primaryRegular rounded-full baseline hover:bg-primary80 md:block px-6">Register
                                Here
                            </Link>
                        </div>
                    </div>

                    <div
                        className="flex px-8 flex-col w-full justify-between space-y-8 space-x-0 absolute left-0 -bottom-56 sm:space-y-0 sm:space-x-12 sm:-bottom-12 sm:flex-row">
                        <Link href="#"
                           className="block flex-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Venue</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Auditorium, 5th floor, National Institute of Technology, Delhi
                            </p>
                        </Link>

                        <Link href="#"
                           className="block flex-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Conference
                                Dates</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                24 - 25 March, 2023
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
            <div class="w-full my-64 sm:my-16"/>
        </>)
}