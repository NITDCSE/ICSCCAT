export default function CollegeTabs({nitdActive, setNitdActive}) {
    return (
        <div className="bg-primary20">
            <div className="container mx-auto px-6 flex">
                <p onClick={setNitdActive(true)} className={`flex-1 text-center py-4 text-xl ${nitdActive ? "text-primaryRegular": ""}`}>National Institute of Technology, Delhi</p>
                </div>
        </div>
    )
}