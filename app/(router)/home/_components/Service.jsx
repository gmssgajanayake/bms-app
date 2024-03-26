import React from "react";

export const Service = () => {
    return (
        <section id={"services"} className="relative" >
              <div className="absolute top-0 right-0 w-full h-full opacity-[0.15] bg-gradient-to-b from-black via-gray-800 to-white"></div>
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                        What do I help
                    </h2>
                    <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet est laudantium nemo rerum sunt?
                        Accusantium amet consequuntur deleniti dolores doloribus error hic magni molestiae temporibus
                        ut. Ab numquam quos ut?
                    </p>
                </div>
                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full px-2 py-3 sm:max-w-xl sm:mx-auto sm:px-0">
                        <div
                            className="relative text-sm antialiased font-semibold text-gray-700">
                            {/* Vertical line running through the middle */}
                            <div
                                className="absolute hidden w-1 h-full transform -translate-x-1/2 bg-indigo-300 border-2 border-primaryColor sm:block left-1/2">

                            </div>
                            {/* Left card */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex flex-col items-center sm:flex-row">
                                    <div className="flex items-center justify-start w-full mx-auto">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos={"fade-right"} data-aos-duration={"1200"}
                                                 className="p-4 duration-150 ease-in bg-white rounded shadow-lg cursor-pointer group hover:bg-gradient-to-r from-gray-800 to-gray-500">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                    Frontend Developer
                                                </h3>
                                                <p className="text-headingColor text-[15px] group-hover:text-white group-hover:font-[500] leading-6">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                                                    ipsam nam nobis officia ullam vitae.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate-y-0">
                                        <figure>
                                            {/*<img src={} alt=""/>*/}
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/* Right card */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex flex-col items-center sm:flex-row">
                                    <div className="flex items-center justify-end w-full mx-auto">
                                        <div className="w-full sm:w-1/2 sm:pl-8 cursor-pointer">
                                            <div data-aos={"fade-left"}
                                                 data-aos-delay={"50"}
                                                 data-aos-duration={"1300"}
                                                 className="p-4 duration-150 ease-in bg-white rounded shadow-lg cursor-pointer group hover:bg-gradient-to-l from-gray-800 to-gray-500">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                    Backend Developer
                                                </h3>
                                                <p className="text-headingColor text-[15px] group-hover:text-white group-hover:font-[500] leading-6">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                                                    ipsam nam nobis officia ullam vitae.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate-y-0">
                                        <figure>
                                            {/*<img src={backendImage} alt=""/>*/}
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/* Left card */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex flex-col items-center sm:flex-row">
                                    <div className="flex items-center justify-start w-full mx-auto">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos={"fade-right"}
                                                 data-aos-delay={"100"}
                                                 data-aos-duration={"1400"}
                                                 className="p-4 duration-150 ease-in bg-white rounded shadow-lg cursor-pointer group hover:bg-gradient-to-r from-gray-800 to-gray-500">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                    UI/UX Design
                                                </h3>
                                                <p className="text-headingColor text-[15px] group-hover:text-white group-hover:font-[500] leading-6">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                                                    ipsam nam nobis officia ullam vitae.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate-y-0">
                                        <figure>
                                            {/*<img src={UIImage} alt=""/>*/}
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/* Right card */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex flex-col items-center sm:flex-row">
                                    <div className="flex items-center justify-end w-full mx-auto">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos={"fade-left"}
                                                 data-aos-delay={"150"}
                                                 data-aos-duration={"1500"}
                                                 className="p-4 duration-150 ease-in bg-white rounded shadow-lg cursor-pointer group hover:bg-gradient-to-l from-gray-800 to-gray-500">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                    Apps Developer
                                                </h3>
                                                <p className="text-headingColor text-[15px] group-hover:text-white group-hover:font-[500] leading-6">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                                                    ipsam nam nobis officia ullam vitae.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate-y-0">
                                        <figure>
                                            {/*<img src={appImage} alt=""/>*/}
                                        </figure>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;