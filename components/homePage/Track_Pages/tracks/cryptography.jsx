// pages/tracks/cryptography.jsx

import React from "react";
import { tracks } from "@/components/homePage/Track_Pages/tracks/data";
import Image from "next/image";

const CryptographyTrackPage = () => {
  const track = tracks.find((t) => t.id === "cryptography");

  if (!track) {
    return <div>Track not found</div>;
  }

  return (
    <div>
      <h1>{track.heading}</h1>
      <div>
        <h2>Presented by:</h2>
        <ul>
          {track.by.map((author, index) => (
            <li key={index}>{author}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Content:</h2>
        <ul>
          {track.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Image:</h2>
        <Image src={track.image} alt={track.heading} />
      </div>
    </div>
  );
};

export default CryptographyTrackPage;
