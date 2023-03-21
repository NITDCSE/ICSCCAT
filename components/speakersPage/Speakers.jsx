import "./speakers.css";
import {aboutSpeakers} from "@/components/speakersPage/speakersData";
import { SessionChair } from "./SessionChair";
import { chiefGuest } from "./chiefGuestData";
import { HonorGuest } from "./HonorGuest";
import SpeakerComponent from "./SpeakerComponent";
import { keynote } from "./keynoteSpeakersData";
export default function SponsorsSection() {
    return (
        <>

        {/* <h1 className=" bg-primary10 py-3 text-center hed underline">Tentative Speakers</h1> */}
        <h1 className=" bg-primary10 py-3 text-center hed block">Chief Guest</h1>
        <section id="railway" className=" bg-primary10 px-3 py-6 spon">
            {  
                Object.values(chiefGuest).map((value,index) => {
                    if(index==0){
                        return (
                            <div>
                            <h1 className="bg-primary10 pb-3 pt-0 text-center hed">Inaugral Session</h1>
                            <SpeakerComponent speaker={value} />
                            </div>
                        )
                    }else{
                        return (
                            <div>
                            <h1 className="bg-primary10 pb-3 pt-0 text-center hed">Valedictory Session</h1>
                            <SpeakerComponent speaker={value} />
                            </div>
                        );
                    }
            })}  
        </section>
        <h1 className=" bg-primary10 py-3 text-center hed block">Guest of Honor</h1>
        <section id="railway" className=" bg-primary10 px-3 py-6 spon">
            {Object.values(HonorGuest).map((value) => {
                return (
                <SpeakerComponent speaker={value} />
                );
            })}  
        </section>
        <h1 className=" bg-primary10 py-3 text-center hed block">Keynote Speaker</h1>
        <section id="railway" className=" bg-primary10 px-3 py-6 spon">
            {Object.values(keynote).map((value) => {
                return (
                <SpeakerComponent speaker={value} />
                );
            })}  
        </section>
        <h1 className=" bg-primary10 py-3 text-center hed block">SESSION CHAIRS</h1>
        <section id="railway" className=" bg-primary10 px-3 py-6 spon">
            {Object.values(SessionChair).map((value) => {
                return (
                <SpeakerComponent speaker={value} />
                );
            })}  
        </section>
        <h1 className=" bg-primary10 py-3 text-center hed block">TENTATIVE LIST OF INVITED SPEAKERS</h1>
        <section id="railway" className=" bg-primary10 px-3 py-6 spon">
            {Object.values(aboutSpeakers).map((value) => {
                return (
                <SpeakerComponent speaker={value} />
                );
            })}  
        </section>
        <br></br>
        </>
    )
}