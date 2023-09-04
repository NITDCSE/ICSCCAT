import Track from "@/components/tracks/Track";
import {tracks} from '@/components/tracks/data'

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
