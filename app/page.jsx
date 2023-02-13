import HeroSection from "@/components/homePage/HeroSection";
import AboutConference from "@/components/homePage/AboutConference";
import ConferenceObjectives from "@/components/homePage/ConferenceObjectives";
import ConferenceThemes from "@/components/homePage/ConferenceThemes";
import AboutColleges from "@/components/homePage/AboutColleges";
import Registerbuttonbottom from "@/components/homePage/registerbuttonbottom";
import CurtainBox from "@/components/curtain/CurtainBox";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <AboutColleges/>
            <AboutConference/>
            <ConferenceObjectives />
            <ConferenceThemes />
            <Registerbuttonbottom />
            <CurtainBox />
        </>
    )
}
