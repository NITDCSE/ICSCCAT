import Image from "next/image";
import rtcsseLogo from "@/public/rtcsse-logo-named.png"
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="pt-2 md:w-1/3">
                    <Image src={rtcsseLogo} className="max-h-12" alt="RTCSSE 2023 object-contain" />
                </div>
                <div className="hidden space-x-6 md:flex">
                    <a href="/" className="hover:text-primary50">Home</a>
                    <a href="./#timeline" className="hover:text-primary50">Schedule</a>
                </div>
                <Link href="/register"
                   className="p-3 px-6 pt-2 text-white bg-primaryRegular baseline rounded-full baseline hidden md:block hover:bg-primary80"
                >Register Now</Link>
            </div>
        </nav>
    )
}