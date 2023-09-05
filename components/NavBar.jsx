"use client"
import Image from "next/image";
import ICSCCAT from "@/assets/ICSCCAT logo.png"
import nitdLogo from "@/public/nitd-logo.png" 
import g20logo from "@/public/g20_logo.png"
import azadi from "@/public/azadi_ka_amrit_mahotsav.png"
import Link from "next/link";
import {useState} from "react"

export default function NavBar() {
    const [open, setOpen] = useState(false)
    const [showTracks, setShowTracks] = useState(false); // State for the "Tracks" sub-menu

    const toggleTracksMenu = () => {
        setShowTracks(!showTracks);
    };

    return (
    <>
        <ConferenceHeader setOpen={setOpen} open={open}/>
        <NavRibbon open={open} toggleTracksMenu={toggleTracksMenu}/>
        {/* {showTracks && <TrackSubMenu />} Render the sub-menu if showTracks is true */}

    </>
    )
}

function NavRibbon({ open, toggleTracksMenu }) {
    const links = [
        {name: "Home", link: "/"},
        {name: "About", link: "/about"},
        {name: "Submissions", link: "/submissions"},
        {name: "Tracks", link: "/tracks"},
        {name: "Speakers", link: "/speakers"},
        {name: "Committees", link: "/committees"},
        {name: "Sponsors", link: ""},
        // {name: "Registration", link: "#"},
       //{name: "Contact Us", link: "/contact"},
        
    ];

    return (
        <nav className={`${open ? 'block' : 'hidden'} md:block bg-primaryDark text-white sticky top-0 z-50`}>
            <div className="container bg-primaryDark absolute md:static mx-auto py-1.5 px-6 left-0 w-full md:w-auto mx-auto">
                <ul className=" md:flex md:items-center md:justify-between">
                    {links.map((link, index) => (
                        <li key={link.name} className="my-6 md:my-0">
                                <Link
                                    className="font-bold uppercase text-md font-medium hover:text-primary20"
                                    href={link.link}
                                >
                                    {link.name}
                                </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

function TrackSubMenu() {
    const trackOptions = [
        { name: "DATA ANALYTICS AND MINING", link: "tracks/dataanalytics" },
        { name: "CRYPTOGRAPHY, CYBER SECURITY AND NETWORK SECURITY", link: "tracks/cryptography" },
        { name: "CLOUD COMPUTING AND IOT", link: "tracks/cloudcomputing" },
        { name: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING", link: "tracks/artificialintelligence" },
        { name: "HEALTHCARE 4.0", link: "tracks/healthcare" },

    ];
    return (
        <div className="container  mx-auto px-6 py-2 w-96 static absolute bg-white z-50 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
                <ul className="mt-4">
                    {trackOptions.map((track, index) => (
                        <li key={track.name} className="my-2">
                            <Link
                                className="font-bold uppercase text-md font-medium hover:text-primary20"
                                href={track.link}
                            >
                                {track.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function ConferenceHeader({open, setOpen}) {
    return (
        <div className="container mx-auto px-6 py-2">
            <div className="flex space-x-6 items-center justify-between">
                <Image src={g20logo} className="object-contain" alt="G20"
                       width={84} quality={100}/>
                <Link href="/" className="flex items-center space-x-4 pt-2">
                    {/* <Image src={ICSCCAT} className="object-contain" alt="ICSCCAT-2024"
                           width={84} quality={100}/> */}
                    <h3 className="hidden md:block font-bold text-3xl tracking-wider text-center align-middle">
                        ICSCCAT 2024
                        </h3>
                </Link>
                <div className="flex-1" />
                <div className="flex space-x-4 items-center justify-end">
                    <a target="_blank" href="https://nitdelhi.ac.in/" className="pt-2">
                        <Image src={nitdLogo} className="max-h-16 object-contain" alt="NITD" width={72}
                               quality={100}/>
                    </a>
                    {/* register button */}
                    {/* <div className="pl-6 hidden md:block ">
                        <Link href="/register"
                              className="p-3 my-auto px-6 pt-2 text-white bg-gray-400 rounded-full baseline"
                        >Registration Closed</Link>
                    </div> */}
                    <Image src={azadi} className="object-contain" alt="G20"
                           width={84} quality={100}/>
                    <div className="md:hidden">
                        <div onClick={() => {
                            setOpen(!open)
                        }}
                             className="max-w-8 my-auto px-6 pt-2 baseline"
                        >
                            {!open ? (
                                <svg viewBox="0 0 116 78" fill="none" className="w-4 h-4 text-blue-800"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00891 7.6001H108.631" stroke="black" strokeWidth="14.3746"
                                          strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M8.00891 38.7451H108.631" stroke="black" strokeWidth="14.3746"
                                          strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M8.00891 69.8896H108.631" stroke="black" strokeWidth="14.3746"
                                          strokeMiterlimit="10" strokeLinecap="round"/>
                                </svg>
                            ) : (<svg viewBox="0 0 101 101" fill="none" className="w-4 h-4 text-blue-800"
                                      xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M62.8626 50.3109L97.9955 15.178C99.6629 13.5136 100.601 11.2549 100.603 8.89892C100.605 6.54294 99.6711 4.28263 98.0066 2.61523C96.3422 0.947831 94.0835 0.00992724 91.7275 0.0078466C89.3716 0.00576596 87.1112 0.93968 85.4438 2.60414L50.3109 37.737L15.178 2.60414C13.5106 0.936737 11.2491 0 8.89108 0C6.53302 0 4.27154 0.936737 2.60414 2.60414C0.936737 4.27154 0 6.53302 0 8.89108C0 11.2491 0.936737 13.5106 2.60414 15.178L37.737 50.3109L2.60414 85.4438C0.936737 87.1112 0 89.3727 0 91.7308C0 94.0888 0.936737 96.3503 2.60414 98.0177C4.27154 99.6851 6.53302 100.622 8.89108 100.622C11.2491 100.622 13.5106 99.6851 15.178 98.0177L50.3109 62.8848L85.4438 98.0177C87.1112 99.6851 89.3727 100.622 91.7308 100.622C94.0888 100.622 96.3503 99.6851 98.0177 98.0177C99.6851 96.3503 100.622 94.0888 100.622 91.7308C100.622 89.3727 99.6851 87.1112 98.0177 85.4438L62.8626 50.3109Z"
                                    fill="black"/>
                            </svg>)}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

 