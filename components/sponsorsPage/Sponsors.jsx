import "./sponsors.css";
import Image from "next/image";
import SERB from './SERB_logo.png'
import CSIR from './CSIR_LOGO.png'
import BHEL from './BHEL_LOGO.jpeg'
import CDH from './CDH_LOGO.png'
import ACS from './ACS_LOGO.jpeg'
import LABINDIA from './LABINDIA_LOGO.jpg'
import GENIUS_ENTERPRISE from './GENIUS_ENTERPRISE_LOGO.png'
import GCPPL from './GCPPL_LOGO.png'
import SCPPL from './SCPPL_LOGO.png'
export default function SponsorsSection() {
    return (
        <>

        <h1 className=" bg-primary10 py-3 text-center hed underline">Sponsors</h1>
        <section id="railway" className=" bg-primary10 px-3 py-12 spon">
        <div class="card-s">
            <div className="s-logo">
            <Image src={SERB} alt=""/>
            </div>
            <div className="text-s">
                <span className="font-bold">SERB:</span> Science & Engineering Research Board
            </div>
        </div>
        <div class="card-s">
            <div className="s-logo">
            <Image src={CSIR} alt=""/>
            </div>
            <div className="text-s">
                <span className="font-bold">CSIR:</span> Council of Scientific & Industrial Research
            </div>
        </div>
        <div class="card-s">
            <div className="s-logo">
            <Image src={CDH} alt="" className="cdh"/>
            </div>
            <div className="text-s">
                <span className="font-bold">CDH:</span> Central Drug House (P) Limited
            </div>
        </div>
        <div class="card-s">
            <div className="s-logo">
            <Image src={BHEL} alt=""/>
            </div>
            <div className="text-s">
                <span className="font-bold">BHEL:</span> Bharat Heavy Electricals Limited
            </div>
        </div>
        <div class="card-s">
            <div className="s-logo acs">
            <Image src={ACS} alt=""/>
            </div>
            <div className="text-s">
                <span className="font-bold">ACS:</span> American Chemical Society
            </div>
        </div>
        <div class="card-s">
            <div className="s-logo acs">
            <Image src={LABINDIA} alt=""/>
            </div>
            <div className="text-s">
                <span className="font-bold">LABINDIA</span>
            </div>
        </div>
        <div class="card-s">
            <div className="s-logo acs">
            <Image src={GENIUS_ENTERPRISE} alt=""/>
            </div>
            <div className="text-s">
                <span className="font-bold">GENIUS ENTERPRISE</span>
            </div>
        </div>
        <div class="card-s">
            <div className="s-logo acs">
            <Image src={GCPPL} alt=""/>
            </div>
            <div className="text-s">
                <span className="font-bold">GCPPL:</span> Globe Civil Projects Pvt Ltd
            </div>
        </div>
        <div class="card-s">
            <div className="s-logo acs">
            <Image src={SCPPL} alt=""/>
            </div>
            <div className="text-s">
                <span className="font-bold">SCIPL:</span> Swadeshi Civil Infrastructure
            </div>
        </div>
        
            
        </section>
        <br></br>
        </>
    )
}