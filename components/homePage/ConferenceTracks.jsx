export default function ConferenceTracks() {
    const themes = [
        "DATA ANALYTICS AND MINING",
        "CRYPTOGRAPHY, CYBER SECURITY AND NETWORK SECURITY",
        "CLOUD COMPUTING AND IOT",
        "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
        "HEALTHCARE 4.0"
    ]
    return (
        <section id="themes" className="py-6">
            <div className="container flex flex-col mx-auto px-6 py-4">
            <h4 className="max-w-md text-4xl font-bold text-center md:text-4xl md:text-left">Tracks</h4>
            <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
                {themes.map(function (theme, index) {
                return (
                    <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md aspect-w-1 aspect-h-1">
                    <ConferenceTrackGridItem theme={theme} />
                    </div>
                );
                })}
            </div>
            </div>
        </section>


    )
}

function ConferenceTrackGridItem({theme}) {
    return (
        <div
            className="block font-medium text-md leading-tight rounded px-6 py-3 my-2 py-auto md:mx-4 focus:outline-none focus:ring-0">
            {theme}
        </div>
    )
}