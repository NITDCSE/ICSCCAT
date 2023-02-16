import brochure from '@/public/RTCSSE-2023_finaldraft.png'
import Image from 'next/image'

export default function Brochure() {
    return (
        <section id="register" className=" bg-primary10 px-6 py-12 justify-center items-center">
            <Image src={brochure} alt="" className="h-auto mx-auto" width={1024} quality={100} />
        </section>
    )
}
