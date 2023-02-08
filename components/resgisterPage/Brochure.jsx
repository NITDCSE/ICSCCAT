import rtcssepng from '@/public/rtcssepng.png'
import Image from 'next/image'

export default function Brochure() {
    return (
        <section id="register" className=" bg-primary10 px-6 py-12 justify-center items-center">
            <Image src={rtcssepng} alt="" className="h-auto max-w-full" />
        </section>
    )
}
