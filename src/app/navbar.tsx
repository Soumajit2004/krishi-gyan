import Link from "next/link";

export default function Navbar() {
    return (
        <div className={"bg-base-300 hidden md:flex"}>
            <nav className="navbar container mx-auto bg-base-300 h-[10vh]">
                <div className="flex-1">
                    <Link className="text-base-content font-bold text-xl" href={"/"}>Krishi Gyan</Link>
                </div>
                <Link href={"https://agriwelfare.gov.in/"} className={"btn btn-primary"}>krishi portal</Link>
            </nav>
        </div>
    )
}
