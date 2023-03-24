import i1 from './0001.jpg'
import i2 from './0002.jpg'
import i3 from './0003.jpg'
import i4 from './0004.jpg'
import i5 from './0005.jpg'
import i6 from './0006.jpg'
import Image from "next/image"
import './schedule.css'
export default function Schedule() {
    return (
        <> <h1 className=" bg-primary10 py-3 text-center hed block underline text-4xl">PROGRAM SCHEDULE <span className='float-right down'><a href='./RTCSSE-2023_Session Plan.pdf' target="_BLANK">Download</a></span></h1>
            
            <section id="railway" className=" bg-primary10 px-3 py-6 spon">
            <div className='w-3/5 sch'><Image src={i1} alt="Image"/></div>
            <div className='w-3/5 sch'><Image src={i2} alt="Image"/></div>
            <div className='w-3/5 sch'><Image src={i3} alt="Image"/></div>
            <div className='w-3/5 sch'><Image src={i4} alt="Image"/></div>
            <div className='w-3/5 sch'><Image src={i5} alt="Image"/></div>
            <div className='w-3/5 sch'><Image src={i6} alt="Image"/></div>
        </section>
    </>
    );
}
