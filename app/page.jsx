import HeroSection from "@/components/homePage/HeroSection";
import AboutConference from "@/components/homePage/AboutConference";
import ConferenceObjectives from "@/components/homePage/ConferenceObjectives";
import ConferenceThemes from "@/components/homePage/ConferenceThemes";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <AboutConference/>
            <ConferenceObjectives />
            <ConferenceThemes />
        </>
    )
}
