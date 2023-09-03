import "./sponsors.css";
import Image from "next/image";
import aegmatel from '@/public/sponsors/aegmatel.jpeg'
import globus from '@/public/sponsors/globus.jpeg'
import mathworks from '@/public/sponsors/mathworks.jpeg'
import takyon from '@/public/sponsors/takyon.jpeg'

 
export default function SponsorsSection() {
    return (
        <>
        <section id="railway" className=" bg-primary10 px-3 py-6 spon">
        <div className="container flex flex-col mx-auto px-6 py-4">
         <h4 className="max-w-md text-4xl font-bold text-center md:text-4xl md:text-left pl-30s">Sponsors</h4>
         </div>
        <div class="card-s">
            <div className="s-logo">
            <Image src={aegmatel} alt=""/>
            </div>
            <div className="text-s">
                <span className="font-bold">Aegmatel</span> 
            </div>
        </div>
        <div class="card-s">
            <div className="s-logo">
            <Image src={globus} alt=""/>
            </div>
            <div className="text-s">
                <span className="font-bold">Globus</span>  
            </div>
        </div>
        <div class="card-s">
            <div className="s-logo">
            <Image src={mathworks} alt="" className="cdh"/>
            </div>
            <div className="text-s">
                <span className="font-bold">Mathworks</span>  
            </div>
        </div>
        <div class="card-s">
            <div className="s-logo">
            <Image src={takyon} alt=""/>
            </div>
            <div className="text-s">
                <span className="font-bold">Takyon</span>  
            </div>
        </div>
        
          </section>
        <br></br>
        </>
    )
}