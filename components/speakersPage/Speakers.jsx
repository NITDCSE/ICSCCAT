import "./speakers.css";
import {aboutSpeakers} from "@/components/speakersPage/speakersData";
import SpeakerComponent from "./SpeakerComponent";
export default function SponsorsSection() {
    return (
        <>

        <h1 className=" bg-primary10 py-3 text-center hed underline">Speakers</h1>
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