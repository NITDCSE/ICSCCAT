// ConferenceTracks.js

'use client'
import data_analytics from "@/assets/icons/data_mining.png";
import cryptography from "@/assets/icons/cryptography.png";
import iot from "@/assets/icons/IoT.png";
import ai from "@/assets/icons/ai.png";
import healthcare from "@/assets/icons/healthcare.png";
import Image from "next/image";
import { useState } from "react";
import './ConferenceTracks.css';

export default function ConferenceTracks() {
  const themes = [
    {
      name: "DATA ANALYTICS AND MINING",
      imageUrl: data_analytics,
      link: "sajal",
    },
    {
      name: "CRYPTOGRAPHY, CYBER SECURITY AND NETWORK SECURITY",
      imageUrl: cryptography,
      link: "crypto",
    },
    {
      name: "CLOUD COMPUTING AND IOT",
      imageUrl: iot,
      link: "sajal",
    },
    {
      name: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
      imageUrl: ai,
      link: "artificial_intelligence",
    },
    {
      name: "HEALTHCARE 4.0",
      imageUrl: healthcare,
      link: "sajal",
    },
  ];

  const linkUrl = 'https://example.com';
  
  const [flippedCard, setFlippedCard] = useState(null);

  const toggleCardFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

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
                  <div className="back">
                  <a href={linkUrl} className="read-more-button">
                    Read More
                  </a>
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

function ConferenceTrackGridItem({ theme }) {
  return (
    <div className="block font-medium text-md leading-tight">
      <p className="text-black font-semibold">{theme}</p>
    </div>
  );
}
