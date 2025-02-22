import { Roboto, Inconsolata } from "next/font/google";
import "@/app/globals.css"

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: "100"
});

const inconsolata = Inconsolata({
    variable: "--inconsolata",
    subsets: ["latin"],
    weight: "500" 
});

export default function Preloader() {
    const datatext = 'SergioRendon.dev';
    return (
        <div className="max-w-[100%] w-screen h-screen absolute bottom-full left-0 flex flex-col justify-center items-center bg-cyan-950 preloader">
            <h1 datatext={datatext} className={`${roboto.variable} antialiased textPrincipal text-cyan-950 font-bold uppercase block relative text-center mb-2 text-3xl`} style={ {WebkitTextStroke: "1px #468189"} }>SergioRendon.dev</h1>
            <p className="relative text-center font-medium subtitleAbout text-base" style={ {color: "#468189"} }>Desarrollador - Front End <span className="preloaderSubtitle">&nbsp;</span></p>
        </div>
    );
}