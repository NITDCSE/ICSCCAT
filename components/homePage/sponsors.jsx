import "./sponsors.css";
import Image from "next/image";
import aegmatel from '@/public/sponsors/aegmatel.jpeg'
import globus from '@/public/sponsors/globus.jpeg'
import mathworks from '@/public/sponsors/mathworks.jpeg'
import takyon from '@/public/sponsors/takyon.jpeg'

 
export default function SponsorsSection() {
    return (
        <>
         
        <h3 className="text-3xl font-bold text-center md:text-4xl md:text-left">
                            About the Conference
                        </h3>
        <section id="railway" className=" bg-primary10 px-3 py-12 spon">
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