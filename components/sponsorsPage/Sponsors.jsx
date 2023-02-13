import "./sponsors.css";
import Image from "next/image";
import SERB from './SERB_logo.png'
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
            
        </section>
        <br></br>
        </>
    )
}