"use client"

import { useState } from "react";
import { Roboto } from "next/font/google";
import "@/app/globals.css"

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: "100"
});

export default function ExperienceBlock() {
    const [activeTab, setActiveTab] = useState('indra');
    
    const handleTabClick = (tabName:string) => {
        setActiveTab(tabName);
    };

    return (
        <div className="bg-neutral-100 w-7xl pb-36">
            <div className="mx-auto max-w-7xl px-2 sm:px-16 lg:px-48 flex justify-between items-center py-4">
                <div className="text-left w-full">
                    <h2 className={`${roboto.variable} antialiased font-semibold text-3xl text-cyan-950 mt-2 mb-8 subtitleAbout`}>
                        <span className="text-cyan-600 subtitleAbout">03</span> Experiencia
                    </h2>

                    <div className="md:flex">
                        <ul className="sm:flex sm:flex-wrap sm:items-center md:flex-col sm:w-full md:w-1/3 md:space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                            <li>
                                <a 
                                    onClick={() => handleTabClick('indra')}
                                    className={`inline-flex items-center px-4 py-3 hover:text-gray-900 hover:cursor-pointer hover:bg-cyan-500 rounded-lg ${activeTab === 'indra' ? 'bg-cyan-600 text-white' : 'bg-white'} w-full dark:bg-cyan-600`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                    </svg>
                                    <span className="ml-4">Indra Colombia</span>
                                </a>
                            </li>

                            <li>
                                <a 
                                    onClick={() => handleTabClick('latitude')}
                                    className={`inline-flex items-center px-4 py-3 rounded-lg hover:cursor-pointer hover:text-gray-900 hover:bg-cyan-500 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white ${activeTab === 'latitude' ? 'bg-cyan-600 text-white' : 'bg-white'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                    </svg>
                                    <span className="ml-4">Latitude Digital</span>
                                </a>
                            </li>
                        </ul>

                        <div className="w-full">
                            {activeTab === 'indra' && (
                                <div className="p-6 bg-white text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Indra Colombia</h3>
                                    <p className="mb-2">Este es el contenido relacionado con Indra Colombia.</p>
                                </div>
                            )}
                            
                            {activeTab === 'latitude' && (
                                <div className="p-6 bg-white text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Latitude Digital</h3>
                                    <p className="mb-2">Este es el contenido relacionado con Latitude Digital.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}