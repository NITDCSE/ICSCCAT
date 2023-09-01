"use client"

import {useState} from "react";
import AboutNITD from "@/components/aboutPage/AboutNITD";
import {aboutColleges} from "@/components/aboutPage/data";
import CollegeTabs from "@/components/aboutPage/CollegeTabs";

export default function AboutColleges() {
    return(
        <>
            <AboutNITD college={aboutColleges.nitd} nitdActive={true} setNitdActive={()=> {}}/>
            
        </>
    )
}