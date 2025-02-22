import Image from 'next/image';
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

interface Props {
    title: string;
    subtitle: string;
    parrafo: string;
}


export default function AboutSection( {title, subtitle, parrafo }: Props) {

    const partes = parrafo.split(" . ");

    return (
        <div className="bg-neutral-100 flex items-center" style={{minHeight: "85vh"}}>
            <div className="mx-auto max-w-7xl px-2 sm:px-16 sm:flex-col md:flex-row lg:px-48 flex justify-between items-center md:py-4 sm:py-8">
                <div className='text-left flex-initial w-full md:w-2/3'>
                    <h1 className={`${roboto.variable} antialiased font-bold text-5xl text-cyan-950`}>{title}</h1>
                    <h2 className={`${inconsolata.variable} antialiased font-semibold text-2xl text-cyan-600 mt-2 mb-8 subtitleAbout`}>{subtitle}</h2>
                    <p className={`${roboto.variable} antialiased text-base text-cyan-950`}>{partes[0]}<br/><br/>{partes[1]}</p>
                </div>
                <div>
                    <Image
                        src="/Images/perfil-1.webp"
                        width={368}
                        height={490}
                        alt="Sergio Rendon"
                        className='imgAbout'
                    />
                </div>
            </div>
        </div>
    );
}