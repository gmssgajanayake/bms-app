"use client"
import React from 'react'
import CountUp from "react-countup";
import {Button} from "@/components/ui/button";
import Link from "next/link";


function Hero() {

    return (
        <section className={"pt-10 pb-10"} id={"home"}>
            <div className="container">
                <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                    {/* ------------- Hero left content start -------------- */}
                    <div className="w-full md:basis-1/2">
                        <h5 data-aos={"fade-right"} data-aos-duration={"1500"}
                            className="text-headingColor text-[16px] font-[600]">
                            Hello welcome to
                        </h5>
                        <h1 data-aos={"fade-up"} data-aos-duration={"1500"}
                            className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[40px] mt-5">
                            Boarding Management<br/> System
                        </h1>
                        <div data-aos={"fade-right"} data-aos-duration={"1500"} data-aos-delay={"200"}
                             className="flex items-center gap-6 mt-7">
                            <Link href={'/sign-up'}>
                                <Button className={'w-32'} variant="outline">Sign In</Button>
                            </Link>
                            <Link href={'/sign-up'}>
                                <Button className={'w-32'}>Get Started</Button>
                            </Link>
                        </div>
                        <p data-aos={"fade-left"} data-aos-duration={"1500"}
                           className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10">
                            <span>
                               <i className="ri-apps-2-line"></i>
                            </span>
                            A Boarding Management System (BMS) revolutionizes the efficiency and organization of
                            boarding facilities, whether in schools, colleges, hostels, or other residential
                            institutions. With seamless integration of technology and management processes, BMS offers a
                            plethora of benefits.
                        </p>
                        <div className="mt-14 flex items-center gap-9">
                            <span className="font-[600] text-[15px] text-smallTextColor">
                               Contact us :
                            </span>
                            <a href="#youtube" className="font-[600] text-[18px] text-smallTextColor">
                                <i className="ri-youtube-fill"></i>
                            </a>
                            <a href="#github" className="font-[600] text-[18px] text-smallTextColor">
                                <i className="ri-github-fill"></i>
                            </a>
                            <a href="#facebook" className="font-[600] text-[18px] text-smallTextColor">
                                <i className="ri-facebook-circle-fill"></i>
                            </a>
                            <a href="#instagram" className="font-[600] text-[18px] text-smallTextColor">
                                <i className="ri-instagram-line"></i>
                            </a>
                        </div>
                    </div>
                    {/* ------------- Hero left content end -------------- */}
                    {/* ------------- Hero right image start -------------- */}
                    <div className="basis-1/2 mt-10 sm:mt-0">
                        <figure className="flex items-center justify-center">
                            <img src={"/boarding.png"} alt="" className=""/>
                        </figure>
                    </div>
                    {/* ------------- Hero right image end -------------- */}
                    {/* ------------- Hero right content start -------------- */}
                    <div
                        className="md:basis-1/5 flex text-center justify-between mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                        <div className="mb-10">
                            <h2 className="text-smallTextColor font-[700] text-[32px]">
                                <CountUp start={0} end={50} duration={2} suffix={"+"}/>
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                System users so far
                            </h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-smallTextColor font-[700] text-[32px]">
                                <CountUp start={0} end={85} duration={2} suffix={"%"}/>
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Success Rate
                            </h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-smallTextColor font-[700] text-[32px]">
                                <CountUp start={0} end={30} duration={2} suffix={"+"}/>
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Current Members
                            </h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-smallTextColor font-[700] text-[32px]">
                                <CountUp start={0} end={5} duration={2} suffix={"+"}/>
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Registered Boarding
                            </h4>
                        </div>
                    </div>
                    {/* ------------- Hero right content end -------------- */}

                </div>
            </div>
        </section>
    )
}

export default Hero