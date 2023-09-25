import Track from "@/components/homePage/Track_Pages/tracks/Track";
import {tracks} from '@/components/homePage/Track_Pages/tracks/data'
import ConferenceTracks from "@/components/homePage/ConferenceTracks";
export default function Tracks() {
  return (
    <>
      <ConferenceTracks/>
      {
      tracks.map(function (elem, idx) {
        return <Track key={idx} {...elem} imgOri = {idx % 2} />
      })
      }
    </>
  );
}
