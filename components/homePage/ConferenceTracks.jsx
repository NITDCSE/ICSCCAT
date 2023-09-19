// ConferenceTracks.js
'use client'
import React, { useState } from "react";
import Link from "next/link";
import data_analytics from "@/assets/icons/data_mining.png";
import cryptography from "@/assets/icons/cryptography.png";
import iot from "@/assets/icons/IoT.png";
import ai from "@/assets/icons/ai.png";
import healthcare from "@/assets/icons/healthcare.png";
import Image from "next/image";
import './ConferenceTracks.css';
import DataAnalyticsTrackPage from "./Track_Pages/tracks/dataanalytics";
import CryptographyTrackPage from "./Track_Pages/tracks/cryptography";
import CloudComputingTrackPage from "./Track_Pages/tracks/cloudcomputing";
import AIMLTrackPage from "./Track_Pages/tracks/aiml";



export default function ConferenceTracks() {
  const themes = [
    {
      name: "DATA ANALYTICS AND MINING",
      imageUrl: data_analytics,
      link: "/", 
    },
    {
      name: "CRYPTOGRAPHY, CYBER SECURITY AND NETWORK SECURITY",
      imageUrl: cryptography,
      link: "/cryptography", 
    },
    {
      name: "CLOUD COMPUTING AND IOT",
      imageUrl: iot,
      link: "/cloudcomputing", 
    },
    {
      name: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
      imageUrl: ai,
      link: "/aiml", 
    },
    {
      name: "HEALTHCARE 4.0",
      imageUrl: healthcare,
      link: "/healthcare", 
    },
  ];  

  const linkUrl = '/';
  
  const [flippedCard, setFlippedCard] = useState(null);

  const toggleCardFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  // Define an array of background colors
  const cardColors = [
    // "#FF5733", // Color for the first card
    // "#33FF57", // Color for the second card
    // "#5733FF", // Color for the third card
    // "#FF33A1", // Color for the fourth card
    // "#A1FF33", // Color for the fifth card
    
    "#FD6824",
    "#57C12C",
    "#26BDE3",
    "#DD1267",
    "#FCC309"
  ];

  return (
    <section id="themes" className="py-6">
      <div className="container flex flex-col mx-auto px-6 py-4">
        <h4 className="max-w-md text-4xl font-bold text-center md:text-4xl md:text-left">Tracks</h4>
        <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
          {themes.map(function (theme, index) {
            return (
              <div
                key={index}
                href={theme.link}
                className={`card ${flippedCard === index ? "flip" : ""}`}
                style={{ backgroundColor: cardColors[index] }} // Assign background color
                onClick={() => toggleCardFlip(index)}
              >
                <div className="card-inner">
                  <div className="front">
                    <div className="front-content">
                      <img
                        src={theme.imageUrl.src}
                        alt={theme.name}
                        className="w-full h-auto rounded-md"
                      />
                      <p className="text-black font-semibold">{theme.name}</p>
                    </div>
                  </div>
                  <div className="back" style={{ backgroundColor: cardColors[index] }}>
                    {/* Use Link to create a link to the individual track page */}
                    <Link href={`/Track_pages/${theme.link}`}>
                      <div className="read-more-button">Read More</div>
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}