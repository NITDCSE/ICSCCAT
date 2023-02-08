import nitdLongLogo from '@/public/nitd-logo-labeled-blue.png'
import sscduLongLogo from '@/public/sscdu-logo-long.png'
import rtcsseWhiteLogo from '@/public/rtcsse-logo-labeled.png'
import Link from "next/link";
import Image from "next/image"

export default function Footer() {
    return (<footer>
        <div className="bg-primary10">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col items-center space-y-6 justify-between">
                    <div className="grid items-center justify-between space-x-8 grid-cols-2">
                        <div>
                            <Image src={nitdLongLogo} alt="" className="max-h-12 object-contain"/>
                        </div>
                        <div>
                            <Image src={sscduLongLogo} alt="" className="max-h-12 object-contain"/>
                        </div>
                    </div>
                    <div className="grid items-center grid-cols-1 md:space-x-8 md:grid-cols-2">
                        <div className="">
                            <Image src={rtcsseWhiteLogo} className="max-h-12 object-contain"/>
                        </div>
                        <div className="py-2 flex items-center justify-around space-x-6 md:flex-col">
                            <h3 className="text-md text-bold">Contact us</h3>
                            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 text-xs">
                                <Link href="mailto:rtcsse@nitdelhi.ac.in">rtcsse@nitdelhi.ac.in</Link>
                                <p> 783 854 5356</p>
                                <p>011 3386 1250</p>
                                <p>011 3386 1256</p>
                            </div>
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
        </div>
    </footer>)
}