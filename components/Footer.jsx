import nitdLongLogo from '@/public/nitd-logo-labeled-blue.png'
import sscduLongLogo from '@/public/sscdu-logo-long.png'
import rtcsseLogo from '@/public/rtcsse-logo.png'
import nitdSquareLogo from "@/public/nitd-logo.png"
import sscduSquareLogo from "@/public/sscdu-logo.png"
import Link from "next/link";
import Image from "next/image"

export default function Footer() {
    return (<footer>
        <div className="bg-primary10">
            <div className="container mx-auto px-6 py-8">
                <div className="grid items-center grid-cols-3">
                    <a className="m-auto flex flex-col items-center space-y-6" target="_blank"
                       href="https://nitdelhi.ac.in/">
                        <p className="text-xs text-center text-primaryRegular md:text-lg hidden md:block">DEPARTMENT OF
                            APPLIED SCIENCES</p>
                        <Image src={nitdLongLogo} alt="" className="max-h-12 object-contain hidden md:block"
                               quality={100}/>
                        <Image src={nitdSquareLogo} alt="" className="max-h-12 object-contain md:hidden" quality={100}/>
                    </a>
                    <div className="mx-auto">
                        <Image src={rtcsseLogo} className="object-contain" width={170} quality={100}/>
                    </div>
                    <a className="m-auto flex flex-col items-center space-y-6" target="_blank"
                       href="https://nitdelhi.ac.in/">
                        <p className="text-xs text-center md:text-lg hidden md:block">DEPARTMENT OF CHEMISTRY</p>
                        <Image src={sscduLongLogo} alt="" className="max-h-14 object-contain hidden md:block"
                               quality={100}/>
                        <Image src={sscduSquareLogo} alt="" className="max-h-14 object-contain md:hidden"
                               quality={100}/>
                    </a>
                </div>
                <p className="text-sm text-center mt-12">All right reserved RTCSSE-2023. Powered by NIT Delhi</p>
            </div>
            <div className="bg-black text-white text-sm">
                <div className="container mx-auto px-6 py-2">
                    <p className="text-center">Designed and Developed by - <Link href="https://hardiksachan.com"
                                                                                 className="underline hover:text-primary20">Hardik
                        Sachan</Link>, <Link
                        href="https://github.com/ShivanshAsthana04" className="underline hover:text-primary20">Shivansh
                        Asthana</Link> & <Link
                        href="https://github.com/voltsyjr" className="underline hover:text-primary20">Vishal
                        Singh</Link></p>
                </div>
            </div>
        </div>
    </footer>)
}