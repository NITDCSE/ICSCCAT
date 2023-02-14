"use client"

import './curtain.css'
import {useState} from "react";

export default function CurtainBox() {
    let [launched, setLaunched] = useState(false)
    return (
        <label className={`curtain-container z-50 ${launched ? "hidden" : ""}`}>
            <div className="curtain-panel">
                <input type="checkbox" className="curtain-trigger" onClick={(e) => setTimeout(function () {
                    setLaunched(true)
                }, 1200)}/>
                <div className="left-curtain curtain text-white font-bold" data-title="Launch"></div>
                <div className="right-curtain curtain text-white font-bold" data-title="Launch"></div>
            </div>
        </label>
    )
}