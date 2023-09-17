import Track from "@/components/homePage/Track_Pages/tracks/Track";
import {tracks} from '@/components/homePage/Track_Pages/tracks/data'

export default function Tracks() {
  return (
    <>
      {
      tracks.map(function (elem, idx) {
        return <Track key={idx} {...elem} imgOri = {idx % 2} />
      })
      }
    </>
  );
}
