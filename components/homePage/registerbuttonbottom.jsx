import Link from "next/link";
export default function registerbuttonbottom() {
    return (
        <div className="flex pt-8 justify-center mb-6 py-3">
                        <Link href="/register"
                              className="p-3 pt-3 text-xl uppercase text-primary05 bg-primaryRegular rounded-full baseline hover:bg-primary80 md:block px-6">Register
                            Here
                        </Link>
                    </div>
    )
}