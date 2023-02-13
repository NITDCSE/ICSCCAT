export default function ConferenceThemes() {
    const themes = [
        "ENVIRONMENT AND SUSTAINABLE ENERGY",
        "ENERGY PRODUCTION, CONSERVATION AND STORAGE",
        "SUSTAINABLE FOOD SYSTEM",
        "HYDROGEN FUELS",
        "SMART MATERIALS",
        "POROUS MATERIALS",
        "COMPOSITE MATERIALS",
        "NANOMATERIALS",
        "CATALYSIS",
        "BIOMATERIALS",
        "MOLECULE MACHINES",
        "MOLECULAR MODELING",
        "GREEN CHEMISTRY",
        "APPLIED CHEMISTRY",
        "FOOD CHEMISTRY",
        "PHOTOCHEMISTRY",
        "METAL ORGANIC FRAMEWORKS (MOFs)",
        "SEMICONDUCTOR MATERIALS",
    ]
    return (
        <section id="themes" className="py-6">
            <div className="container flex flex-col mx-auto px-6 py-4">
                <h4 className=" max-w-md text-4xl font-bold text-center md:text-4xl md:text-left">Conference Themes</h4>
                <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3">
                    {themes.map(function (theme) {
                        return (
                            <ConferenceThemeGridItem theme={theme} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function ConferenceThemeGridItem({theme}) {
    return (
        <div
            className="block font-medium bg-primary10 text-md leading-tight rounded px-6 py-3 my-2 md:mx-4 focus:outline-none focus:ring-0">
            {theme}
        </div>
    )
}