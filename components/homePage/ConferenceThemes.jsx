export default function ConferenceThemes() {
    const themes = [
        "Sustainable Energy",
        "Energy Production,Conservation and Storage",
        "Sustainable Food System",
        "Hydrogen Fuels",
        "Smart Materials",
        "Porous Materials",
        "Composite Materials",
        "Nanomaterials",
        "Catalysis",
        "Biomaterials",
        "Molecule Machines",
        "Molecular Modelling",
        "Green Chemistry",
        "Applied Chemistry",
        "Food Chemistry",
        "Photochemistry",
        "Metal Organic Frameworks(MOFs)"
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
            className="block font-medium bg-primary10 text-sm leading-tight uppercase rounded px-6 py-3 my-2 md:mx-4 focus:outline-none focus:ring-0">
            {theme}
        </div>
    )
}