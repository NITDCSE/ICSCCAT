import Intro from "@/components/abstractPage/Intro";
import ConferenceThemes from "@/components/homePage/ConferenceTracks";
import PaperGuidelines from "@/components/abstractPage/Guidelines";
import Submission from "@/components/abstractPage/Submission";

export default function Committees() {
    return (<>
        <Intro/>
        <ConferenceThemes/>
        <PaperGuidelines />
        <Submission />
    </>)
}