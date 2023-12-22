import "./sponsors.css";
import Image from "next/image";
import aegmatel from '@/public/sponsors/aegmatel.jpeg'
import globus from '@/public/sponsors/globus.jpeg'
import mathworks from '@/public/sponsors/mathworks.jpeg'
import takyon from '@/public/sponsors/takyon.jpeg'
import serb from '@/public/sponsors/serb.png'
import kcet from '@/public/sponsors/kcet.png'

 
export default function SponsorsSection() {
    return (
        <>
        <h1 className=" bg-primary10 py-3 text-center hed underline">Supporter</h1>
        <section id="railway" className=" bg-primary10 px-3 py-12 spon">
        <div class="card-s">
            <div className="s-logo">
            <Image src={serb} alt=""/>
            </div>
            <div className="text-s">
                <span className="font-bold">Science and Engineering Research Board</span> 
            </div>
        </div>
        <div class="card-s">
            <div className="s-logo">
            <Image src={kcet} alt=""/>
            </div>
            <div className="text-s">
                <span className="font-bold">Khalsa College Of Engineering & Technology</span>  
            </div>
        </div>
        {/* <div class="card-s">
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
         */}
          </section>

        {/* <section id="railway" className=" bg-primary10 px-3 py-12 spon">Under Construction</section> */}
        <br></br>
        </>
    )
}