export default function PaperGuidelines() {
    return (
        <section className="py-6 bg-primary10">
            <div className="container flex flex-col mx-auto px-6 py-4">
                <h3 className="text-3xl font-bold text-center md:text-4xl md:text-left">Guidelines for Paper Presentation</h3>
                <div className="mt-6 flex flex-col md:flex-row md:space-x-12">
                    <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-medium text-center py-6">Poster Presentation</h4>
                        <ul className="list-disc list-outside pl-4 space-y-1">
                            <li>Your poster must correspond to the title and content of your submission.</li>
                            <li>Your poster must be designed to fit within the confines of the provided posterboard. For this, the poster should be of the standard <span className="font-bold">A0(3ft * 4ft)</span> size and in <span className="font-bold">potrait</span> mode.</li>
                            <li>The posters should be designed for clear viewing from beyond 1 meter so that they can be viewed by a number of people simultaneously.</li>
                            <li>Upon submission of your poster a unique ID shall be corresponded to you via email which need to be printed on the top right corner of the poster and should be distinct from the rest of the content to make it easily identifiable.</li>
                            <li>The best Poster Presentations (03) will be awarded.</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-medium text-center py-6">Oral Presentation</h4>
                        <ul className="list-disc list-outside pl-4 space-y-1">
                            <li>The presentation should be prepared for a maximum duration of <span className="font-bold">10 minutes.</span></li>
                            <li>It is recommended to prepare the slides in <span className="font-bold">4:3 aspect ratio</span> and limit the presentation to a maximum of <span className="font-bold">8-10 slides only.</span></li>
                            <li>Laptops and audio/visual systems are available at the conference venue, The speakers do not need to bring these with them.</li>
                            <li>The speakers should bring their presentations in <span className="font-bold">.pdf</span> format only, in a USB drive.</li>
                            <li>At the beginning of each session, please make sure to locate the student volunteer and upload your presentation on the laptop. </li>
                            <li>The best Oral Presentations (03) will be awarded.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}