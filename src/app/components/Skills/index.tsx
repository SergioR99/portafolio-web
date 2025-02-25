import { Roboto } from "next/font/google";
import "@/app/globals.css"
import Carrusel from "./carrousel.jsx";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: "100"
});

export default function SkillSection() {
    return (
        <div className="bg-neutral-100 w-7xl pb-36">
            <div className="mx-auto max-w-7xl px-8 lg:px-48 flex justify-between items-center py-4">
                <div className='text-left w-full'>
                    <h2  className={`${roboto.variable} antialiased font-semibold text-3xl text-cyan-950 mt-2 mb-8 subtitleAbout`}><span className='text-cyan-600 subtitleAbout'>02</span> Conocimientos</h2>
                    <div className="w-100">
                        <Carrusel />
                    </div>
                </div>
            </div>
        </div>
    );
}