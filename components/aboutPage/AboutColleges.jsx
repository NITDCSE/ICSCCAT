"use client"

import {useState} from "react";
import AboutNITD from "@/components/aboutPage/AboutNITD";
import {aboutColleges} from "@/components/aboutPage/data";
import CollegeTabs from "@/components/aboutPage/CollegeTabs";

export default function AboutColleges() {
    let [nitdActive, setNitdActive] = useState(true)
    return(
        <>
            <AboutNITD college={nitdActive ? aboutColleges.nitd : aboutColleges.ssdu} nitdActive={nitdActive} setNitdActive={setNitdActive()}/>
        </>
    )
}