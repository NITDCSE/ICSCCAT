import Link from "next/link";

export default function Submission() {
    return (
        <section className="py-6 bg-primary5">
            <div className="container flex flex-col mx-auto px-6 py-4">
                <h3 className="text-3xl font-bold text-center md:text-4xl md:text-left">How to Submit Abstract</h3>
                <div className="mt-6 flex flex-col">
                    <div className="flex-1">
                        <h4 className="text-lg md:text-xl font-medium py-6">The title should be written in:</h4>
                        <ul className="list-disc list-outside pl-4 space-y-1">
                            <li>Black Color</li>
                            <li>Times New Roman 14 pts; Bold</li>
                            <li>Justified Alignment</li>
                            <li>Indentation: 0 Left, 0 Right, Special-none</li>
                            <li>Spacing: 6pt before, 6pt after</li>
                            <li>Paragraph/Line Spacing: 1.5</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-lg md:text-xl font-medium py-6">Mention Author(s) details below Title of Abstract</h4>
                        <ul className="list-disc list-outside pl-4 space-y-1">
                            <li>Author Name(s)</li>
                            <li>Times New Roman 10 pts; Bold</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-lg md:text-xl font-medium py-6">The abstract should be:</h4>
                        <ul className="list-disc list-outside pl-4 space-y-1">
                            <li>Not more than 250 words</li>
                            <li>self-contained</li>
                            <li>Black Color</li>
                            <li>Times New Roman 12 pts</li>
                            <li>Justified Alignment</li>
                            <li>Indentation: 0Left, 0Right, None-special</li>
                            <li>Spacing: 0pt before, 0pt after</li>
                            <li>Paragraph/Line Spacing: Single, 1</li>
                            <li>.doc/.docx format</li>
                            <li>A maximum of 1 image/scheme can be included.</li>
                        </ul>
                    </div>
                    {/* <p className="mt-10 py-2">Format for abstract submission: <a href="https://docs.google.com/document/d/16ur7J_aL2IslyCTkuG6Uo8IAy5oIYQEQ/edit" className="font-bold text-primaryRegular hover:text-primary80">Download</a></p> */}
                    <p className="py-2">Google form For registration and abstract submission: <a href="https://rb.gy/irh8cs" className="font-bold text-primaryRegular hover:text-primary80">Download</a></p>
                    <p className="py-2">For registration fees payment, please check <Link href="register" className="font-bold text-primaryRegular hover:text-primary80">Instructions</Link></p>
                </div>

            </div>
        </section>

    )
}