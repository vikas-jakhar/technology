import React from 'react';
import women from "../assets/image/webp/women.png";
import women_getting_injection from "../assets/image/webp/women-getting-injection.png";
import bottom_right from "../assets/image/webp/bottom-right.png";
import top_left from "../assets/image/webp/light-green-left-top.png";

const Card = () => {
    const cardData = [
        {
            id: 1,
            title: "Devices",
            description: "Our state-of-the-art devices are designed to target a variety of skin concerns with precision and efficacy.",
            image: women,
            buttonText: "Our Devices",
        },
        {
            id: 2,
            title: "Treatments",
            description: "At Halsey Dermatology, we offer a comprehensive range of treatments to address your unique skin care needs.",
            image: women_getting_injection,
            buttonText: "Our Treatments",
        },
    ];

    return (
        <section className='py-10 relative'>
            <div className="container px-3 py-0.5 mb-px relative z-[1]">
                <div className="bg-light_gray p-5 lg:p-10 flex flex-col items-center">
                    <div className="flex items-center justify-center gap-1 sm:gap-3">
                        <span className='sm:w-[60px] w-5 h-0.5 bg-light_green flex'></span>
                        <h2 className='font-Kaushan font-normal text-xl sm:text-2xl md:text-32 sm:mx-0.5 px-px text-light_green text-center md:leading-46'>
                            Cutting Edge Technology
                        </h2>
                        <span className='sm:w-[60px] w-5 h-0.5 bg-light_green flex'></span>
                    </div>
                    <h2 className='font-Archivo mt-2.5 max-w-[799px] text-center font-semibold text-2xl sm:text-3xl md:text-5xl md:leading-62 text-primary_black'>
                        Devices and Treatments to meet your needs
                    </h2>
                    <div className="flex flex-col justify-center md:flex-row items-center md:items-start md:mt-14 mt-5 gap-10 md:gap-8 lg:gap-10 pt-1 w-full h-full">
                        {cardData.map((card) => (
                            <div key={card.id} className="max-w-[510px] w-full h-full min-h-[627px]">
                                <div className="border-[#0000001A] border-[1.09px] h-full">
                                    <img src={card.image} alt={card.title} className='w-full h-full xl:min-h-[390px]' />
                                    <div className="bg-white md:p-[30px] p-5">
                                        <p className='font-Archivo font-semibold text-primary_black text-25 leading-32'>
                                            {card.title}
                                        </p>
                                        <p className='mt-4 font-Archivo font-normal text-base text-primary_black opacity-70'>
                                            {card.description}
                                        </p>
                                        <button className='mt-[27px] duration-300 ease-linear hover:text-light_green hover:bg-white hover:shadow-[0px_0px_0px_1px_#6E9277_inset,0px_0px_0px_1px_#FFFFFF,0px_0px_2px_2px_#6E9277] font-Archivo font-semibold text-white py-4 px-7 text-lg bg-light_green'>
                                            {card.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <img src={top_left} alt="top_left" className=' absolute top-0 left-0' />
            <img src={bottom_right} alt="bottom_right" className=' absolute bottom-0 right-0' />
        </section>
    )
}

export default Card;
