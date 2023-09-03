import HeroSection from "@/components/homePage/HeroSection";
import AboutConference from "@/components/homePage/AboutConference";
import ConferenceObjectives from "@/components/homePage/ConferenceObjectives";
import ConferenceTracks from "@/components/homePage/ConferenceTracks";
import AboutColleges from "@/components/homePage/AboutColleges";
import Registerbuttonbottom from "@/components/homePage/registerbuttonbottom";


export default function Home() {
    return (
        <>
            <HeroSection/>
            <AboutColleges/>
            <AboutConference/>
            <ConferenceTracks />
        </>
    )
}
