import React from "react";

export const Service = () => {
    return (
        <section id={"benefits"} className="relative pt-10">
            <div
                className="absolute top-0 right-0 w-full h-full opacity-[0.15] bg-gradient-to-b from-black via-gray-800 to-white"></div>
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                        What do BMS help
                    </h2>
                    <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
                        A Boarding Management System brings efficiency, security, communication, and data-driven
                        decision-making to boarding facilities, ultimately enriching the living experience for residents
                        and improving the operational effectiveness of the institution.
                    </p>
                </div>
                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full px-2 py-3 sm:max-w-xl sm:mx-auto sm:px-0">
                        <div
                            className="relative text-sm antialiased font-semibold text-gray-700">
                            {/* Vertical line running through the middle */}
                            <div
                                className="absolute hidden w-1 h-full transform -translate-x-1/2 bg-white border-2 border-white sm:block left-1/2">

                            </div>
                            {/* Left card */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex flex-col items-center sm:flex-row">
                                    <div className="flex items-center justify-start w-full mx-auto">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos={"fade-right"} data-aos-duration={"1200"}
                                                 className="p-4 duration-150 ease-in bg-white rounded shadow-lg cursor-pointer group hover:bg-gradient-to-r from-gray-800 to-gray-500">
                                                <h3 className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                    Efficiency Boost
                                                </h3>
                                                <p className="text-headingColor text-[15px] group-hover:text-white group-hover:font-[500] leading-6">
                                                    BMS streamlines administrative tasks, automating processes such as
                                                    room allocation, check-ins, and check-outs. This not only reduces
                                                    the workload on staff but also minimizes errors, ensuring smooth
                                                    operations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute flex items-center bg-indigo-100 justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full  left-1/2 sm:translate-y-0">
                                        <figure>
                                            <i className="ri-home-4-line"></i>
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
                                                    Safety Priority
                                                </h3>
                                                <p className="text-headingColor text-[15px] group-hover:text-white group-hover:font-[500] leading-6">
                                                    Enhanced security. BMS allows for precise tracking of residents'
                                                    movements, ensuring that only authorized individuals access
                                                    designated areas. This is particularly crucial for the safety of
                                                    students in educational institution
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute bg-indigo-100 flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate-y-0">
                                        <figure>
                                            <i className="ri-shield-keyhole-line"></i>
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
                                                    Connectivity Catalyst
                                                </h3>
                                                <p className="text-headingColor text-[15px] group-hover:text-white group-hover:font-[500] leading-6">
                                                    BMS facilitates effective communication between residents, staff,
                                                    and administration. Features like messaging platforms or
                                                    notifications keep everyone informed about important updates,
                                                    events, or emergencies, fostering a sense of community and belonging
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute bg-indigo-100 flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate-y-0">
                                        <figure>
                                            <i className="ri-links-line"></i>
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
                                                    Data-Driven Optimization
                                                </h3>
                                                <p className="text-headingColor text-[15px] group-hover:text-white group-hover:font-[500] leading-6">
                                                    BMS provides valuable data insights through analytics tools.
                                                    Administrators can analyze occupancy trends, identify areas for
                                                    improvement, and make informed decisions to optimize resources and
                                                    enhance the overall boarding experience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute bg-indigo-100 flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-gray-900 left-1/2 sm:translate-y-0">
                                        <figure>
                                            <i className="ri-loop-left-line"></i>
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