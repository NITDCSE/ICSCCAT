import Image from "next/image";
import rtcsseLogo from "@/public/rtcsse-logo-labeled.png"
import nitdLogo from "@/public/nitd-logo.png"
import sscduLogo from "@/public/sscdu-logo.png"
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="sticky top-0 z-50 bg-primary05 drop-shadow">
            <div className="bg-black text-white text-xs">
                <div className="container mx-auto py-1">
                    <p className="text-center">Contact us - <Link href="mailto:rtcsee@nitdelhi.ac.in"
                                                                  className="underline hover:text-primary20">rtcsee@nitdelhi.ac.in</Link>
                    </p>
                </div>
            </div>
            <div className="container mx-auto p-6 ">
                <div className="flex items-center justify-between">
                    <div className="pt-2">
                        <Image src={rtcsseLogo} className="max-h-12 object-contain" alt="RTCSSE 2023"/>
                    </div>
                    <div className="hidden md:flex space-x-4 items-center justify-end">
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