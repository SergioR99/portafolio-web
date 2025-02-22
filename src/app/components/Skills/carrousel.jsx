
'use client'

import "@/app/globals.css"
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carrusel() {

    const data =  [
        {
            id: "1",
            conocimiento: "React",
            urlIamge: 'react.webp',
        },
        {
            id: "2",
            conocimiento: "React Native",
            urlIamge: 'react.webp',
        },
        {
            id: "3",
            conocimiento: "Tailwind",
            urlIamge: 'tailwind.webp',
        },
        {
            id: "4",
            conocimiento: "Javascript",
            urlIamge: 'js.webp',
        },
        {
            id: "5",
            conocimiento: "Typescript",
            urlIamge: 'typescript.webp',
        },
        {
            id: "6",
            conocimiento: "Next",
            urlIamge: 'next.webp',
        },
        {
            id: "7",
            conocimiento: "Git",
            urlIamge: 'git.webp',
        },
        {
            id: "8",
            conocimiento: "HTML",
            urlIamge: 'html.webp',
        },
        {
            id: "9",
            conocimiento: "CSS",
            urlIamge: 'css.webp',
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };

    return (
        <Slider {...settings}>
            {data.map((d) => (
            <div key={d.id} className="py-5 px-8 bg-white text-center rounded-lg">
                <Image
                    src={`/Images/${d.urlIamge}`}
                    width={64}
                    height={64}
                    className="mx-auto"
                    alt={d.conocimiento}
                />
                <h3 className="mt-4 font-extrabold text-lg text-cyan-600 subtitleAbout">{d.conocimiento}</h3>
            </div>
            ))}
        </Slider>
    );
}