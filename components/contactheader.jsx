import Link from "next/link";
export default  function contactheader() 
{
    return (
        <div className="bg-black text-white text-sm">
        <div className="container mx-auto px-6 py-2">
            <p>Designed and Developed by - <Link href="https://hardiksachan.com"
                                                                         className="underline hover:text-primary20">Hardik
                Sachan</Link> & <Link
                href="https://github.com/ShivanshAsthana04" className="underline hover:text-primary20">Shivansh
                Asthana</Link></p>
        </div>
    </div>

       
    )
}