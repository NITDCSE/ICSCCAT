import Image from "next/image";
import rtcsseLogoLabeled from "@/public/rtcsse-logo-labeled.png"
import rtcsseLogo from "@/public/rtcsse-logo.png"
import nitdLogo from "@/public/nitd-logo.png"
import sscduLogo from "@/public/sscdu-logo.png"
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="sticky top-0 z-50 bg-primary05 drop-shadow">
            <div className="bg-black text-white text-xs">
                <div className="container mx-auto py-1 px-6">
                    <div className="items-center justify-between flex flex-col md:flex-row">
                        <p className="text-center">Contact us - <span><Link href="mailto:rtcsee@nitdelhi.ac.in"
                                                                            className="underline hover:text-primary20">rtcsee@nitdelhi.ac.in</Link></span>
                        </p>
                        <p>+91 782 854 5356, 011 3386 1250, 011 3386 1256</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-6 ">
                <div className="flex items-center justify-between">
                    <div className="flex pt-2">
                        <Image src={rtcsseLogoLabeled} className="max-h-12 object-contain hidden md:block" alt="RTCSSE 2023"/>
                        <Image src={rtcsseLogo} className="max-h-12 object-contain md:hidden" alt="RTCSSE 2023" width={72}/>
                    </div>
                    <div className="flex space-x-4 items-center justify-end">
                        <div className="pt-2">
                            <Image src={nitdLogo} className="max-h-12 object-contain" alt="NITD" width={72} />
                        </div>
                        <div className="pt-2">
                            <Image src={sscduLogo} className="max-h-12 object-contain" alt="NITD" width={72}/>
                        </div>
                        <div className="pl-6">
                            <Link href="/register"
                                  className="p-3 my-auto px-6 pt-2 text-white bg-primaryRegular rounded-full baseline hidden md:block hover:bg-primary80"
                            >Register</Link>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
)
}