import Image from 'next/image';
import { Roboto } from "next/font/google";
import "@/app/globals.css"

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: "100"
});


export default function HeaderPage() {
    const data = [
        {
            id: "01",
            title: "Sobre mi",
            url: "#sobremi",
        },
        {
            id: "02",
            title: "Conocimientos",
            url: "#conocimientos",
        },
        {
            id: "03",
            title: "Experiencia",
            url: "#experiencia",
        },
        {
            id: "04",
            title: "proyectos",
            url: "#proyectos",
        },
    ]
    return (
        <nav className="bg-neutral-100">
            <div className="mx-auto max-w-7xl px-2 sm:px-16 lg:px-32 flex justify-between items-center py-4">
                <div>
                    <Image
                        src="/Images/ico-logo.svg"
                        width={64}
                        height={41}
                        alt="Logo Sergio Rendon"
                    />
                </div>
                <div className='hidden md:block'>
                    <ul className='aling-items-center flex justify-between'>
                        {data.map((e) => (
                            <li key={e.id} className={`${roboto.variable} antialiased relative itemsMenu inline-flex`}>
                                <a href={e.url} className='p-4 text-xs uppercase font-semibold tracking-[1px]'>
                                    <span className='text-cyan-600 subtitleAbout' style={ {fontSize: ".9rem", marginRight: "8px"} }>{e.id}</span>
                                    {e.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`${roboto.variable} antialiased inline-flex relative`}>
                    <a href="#" className='contacto-header text-xs p-4 uppercase -tracking-tighter font-semibold border-2 border-solid border-cyan-600 text-cyan-950 overflow-hidden relative'>Contacto</a>
                </div>
            </div>
        </nav>
    );
}