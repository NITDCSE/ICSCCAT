import nitdWhiteLogo from '@/public/nitd-logo-labeled-white.png'
import ssduWhiteLogo from '@/public/nitd-logo-labeled-white.png'
import rtcsseWhiteLogo from '@/public/rtcsse-logo-white.png'
import Link from "next/link";
import Image from "next/image"

export default function Footer() {
    return (<footer>
            <div className="bg-primary50">
                <div className="container mx-auto px-6 py-8 text-white">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <div className="flex space-x-8 md:flex-col md:space-y-4 md:space-x-0">
                            <div className="">
                                <Image src={nitdWhiteLogo} alt="" className="max-h-12 object-contain"/>
                            </div>
                            <div className="py-2">
                                <Image src={ssduWhiteLogo} alt="" className="max-h-12 object-contain"/>
                            </div>
                        </div>

                        <div className="py-2 pr-32">
                            <Image src={rtcsseWhiteLogo} alt="" className="max-h-24 object-contain"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white text-sm">
                <div className="container mx-auto px-6 py-2">
                    <p className="text-center">Designed and Developed by - <Link href="https://hardiksachan.com"
                                                                                 className="underline hover:text-primary20">Hardik
                        Sachan</Link> & <Link
                        href="https://github.com/ShivanshAsthana04" className="underline hover:text-primary20">Shivansh
                        Asthana</Link></p>
                </div>
            </div>
        </footer>)
}