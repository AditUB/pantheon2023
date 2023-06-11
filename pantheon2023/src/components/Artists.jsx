import React from "react";
import hanu from "../assets/hanu.jpg";
import shivu from "../assets/shivu.jpg";

function Artists() {
    return (
        <div className="container px-6 py-12 mx-auto">
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="text-2xl font-bold leading-normal tracking-wide text-center text-gray-100 lg:text-4xl xl:text-6xl">Our Artists</h1>
                <p className="py-3 font-normal text-center text-gray-100 lg:text-2xl tracking-tightt lg:leading-9 lg:w-3/5 f-f-l">
                    Dive into our projects from small businesses to Enterprise solutions. Record of delivering
                </p>
            </div>
            <div className="mt-5 lg:mt-24">
                <div className="flex flex-col items-center lg:flex-row lg:justify-between pb-14">
                    <div className="relative flex w-1/2 mb-5 lg:mb-0">
                        <div className>
                            <div className="absolute top-0 z-0 hidden lg:block">
                                <svg className xmlns width={403} height={527} viewBox="0 0 403 527" fill="none">
                                    <rect
                                        x="-1.61167"
                                        y="1.37931"
                                        width={362}
                                        height={497}
                                        transform="matrix(-0.996996 -0.077453 -0.077453 0.996996 399.607 28.1496)"
                                        stroke="#E97451"
                                        strokeWidth={3}
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="z-10 hidden mt-4 ml-3 lg:ml-4 lg:mt-4 lg:block">
                            <img className="w-full" src={hanu} alt />
                        </div>
                        <div className="block w-full lg:hidden">
                            <img className="w-full" src={hanu} alt />
                        </div>
                    </div>
                    <div className="flex items-center lg:w-1/2">
                        <div className="hidden lg:block lg:pr-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width={151} height={4} viewBox="0 0 151 4" fill="none">
                                <line x1="0.75" y1="1.63696" x2="150.75" y2="1.63696" stroke="#E97451" strokeWidth={3} />
                            </svg>
                        </div>
                        <div className="lg:pt-0 lg:pt-5">
                            <div className="py-4 text-2xl font-normal text-center text-gray-200 lg:text-left f-f-d-s lg:text-3xl xl:text-5xl">
                                HanuMankind
                            </div>
                            <div className="py-3 text-base font-normal text-center text-gray-100 xl:text-2xl lg:text-left xl:leading-9 f-f-l">
                                Hanumankind is the lyrical rap identity donned by Sooraj Cherukat who’s made a splash of a debut not too long ago.
                                With the debut festival performance at NH7 coinciding with his first release from his debut EP 'Kalari' set the stage
                                for cementing his position as an undeniable force in the space of up and coming independent artists in the
                                subcontinent.
                            </div>
                            <div className="flex justify-center w-full lg:block">
                                <a target="_blank" href="https://www.thewildcity.com/artists/17622-hanumankind">
                                    <button className="pt-8 text-base font-bold text-white border-b-2 border-red-500 lg:text-2xl focus:outline-none f-f-l">
                                        View Project
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center py-8 lg:flex-row lg:justify-between">
                    <div className="relative flex justify-center w-1/2 pb-8 mb-5 lg:hidden lg:mb-0">
                        <img className src={shivu} alt />
                    </div>
                    <div className="flex items-center md:mt-4 lg:mt-0 lg:w-1/2">
                        <div className="lg:pt-5 lg:pt-0">
                            <div className="py-4 text-2xl font-normal text-center text-gray-200 lg:text-left f-f-d-s lg:text-3xl xl:text-5xl">
                                Shiva Manvi
                            </div>
                            <div className="py-3 text-base font-normal text-center text-gray-100 xl:text-2xl lg:text-left xl:leading-9 f-f-l">
                                Shiva Manvi is a wedding DJ headquartered in Bangalore's South Bangalore neighborhood with an experience of more than
                                5 years. If you want to entertain your guests, it is a popular choice for giving DJ services. While you proceed with
                                your wedding procedures and ceremonies, music will keep your guests entertained.
                            </div>
                            <div className="flex justify-center w-full lg:block">
                                <a href="https://shivamanvi.com" target="_blank">
                                    <button className="pt-8 text-base font-bold text-white border-b-2 border-red-500 lg:text-2xl focus:outline-none f-f-l">
                                        View Project
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="hidden pl-6 lg:block">
                            <svg xmlns="http://www.w3.org/2000/svg" width={151} height={4} viewBox="0 0 151 4" fill="none">
                                <line x1="0.75" y1="1.63696" x2="150.75" y2="1.63696" stroke="#E97451" strokeWidth={3} />
                            </svg>
                        </div>
                    </div>
                    {/* <div className="relative justify-end hidden w-1/2 lg:flex">
                    <div className="z-10 mt-4 ml-4">
                        <img className src="https://i.ibb.co/L6fNj5M/2.png" alt />
                    </div>
                </div> */}

                    {/* New code */}
                    <div className="relative flex justify-end w-1/2 mb-5 lg:mb-0">
                        <div className>
                            <div className="absolute top-0 z-0 hidden lg:block">
                                <svg className xmlns width={403} height={527} viewBox="0 0 403 527" fill="none">
                                    <rect
                                        x="-1.61167"
                                        y="1.37931"
                                        width={362}
                                        height={497}
                                        transform="matrix(-0.996996 -0.077453 -0.077453 0.996996 399.607 28.1496)"
                                        stroke="#E97451"
                                        strokeWidth={3}
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="z-10 hidden mt-4 ml-3 lg:ml-4 lg:mt-4 lg:block">
                            <img className="w-full" src={shivu} alt />
                        </div>
                        {/* <div className="block w-full lg:hidden">
                        <img className="w-full" src="https://i.ibb.co/nBpjXrT/1.png" alt />
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Artists;
