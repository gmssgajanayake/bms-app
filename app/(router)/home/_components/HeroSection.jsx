"use client"
import React from 'react'


function HeroSection() {

    return (
        <div className="w-max pt-16 h-[5000px]">
            <section className={"pt-0"} id={"about"}>
                <div className="container pt-14">
                    <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                        {/* ------------- Hero left content start -------------- */}
                        <div className="w-full md:basis-1/2">
                            <h5 data-aos={"fade-right"} data-aos-duration={"1500"}
                                className="text-headingColor text-[16px] font-[600]">
                                Hello welcome
                            </h5>
                            <h1 data-aos={"fade-up"} data-aos-duration={"1500"}
                                className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[40px] mt-5">
                                I'm Sakuja Shamal <br/> Software Developer
                            </h1>
                            <div data-aos={"fade-right"} data-aos-duration={"1500"} data-aos-delay={"200"}
                                 className="flex items-center gap-6 mt-7">
                                <a href="#contact">
                                    <button
                                        className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                                        <i className="ri-mail-line"></i> Here me
                                    </button>
                                </a>
                                <a href="#portfolio"
                                   className={"font-[600] text-[16px] text-smallTextColor border-smallTextColor border-b border-solid "}>
                                    See portfolio
                                </a>
                            </div>
                            <p data-aos={"fade-left"} data-aos-duration={"1500"}
                               className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10">
                            <span>
                               <i className="ri-apps-2-line"></i>
                            </span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium dolor fuga
                                obcaecati
                                omnis quod sint totam unde veritatis voluptatibus.
                            </p>
                            <div className="mt-14 flex items-center gap-9">
                            <span className="font-[600] text-[15px] text-smallTextColor">
                                Follow me :
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
                        <div className="basis-1/3 mt-10 sm:mt-0">
                            <figure className="flex items-center justify-center">
                                {/*<img src={heroImag} alt="" className=""/>*/}
                            </figure>
                        </div>
                        {/* ------------- Hero right image end -------------- */}
                        {/* ------------- Hero right content start -------------- */}
                        <div
                            className="md:basis-1/5 flex text-center justify-between mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                            <div className="mb-10">
                                <h2 className="text-smallTextColor font-[700] text-[32px]">
                                    <CountUp start={0} end={6} duration={2} suffix={"+"}/>
                                </h2>
                                <h4 className="text-headingColor font-[600] text-[18px]">
                                    Years of Experience
                                </h4>
                            </div>
                            <div className="mb-10">
                                <h2 className="text-smallTextColor font-[700] text-[32px]">
                                    <CountUp start={0} end={100} duration={2} suffix={"%"}/>
                                </h2>
                                <h4 className="text-headingColor font-[600] text-[18px]">
                                    Success Rate
                                </h4>
                            </div>
                            <div className="mb-10">
                                <h2 className="text-smallTextColor font-[700] text-[32px]">
                                    <CountUp start={0} end={150} duration={2} suffix={"+"}/>
                                </h2>
                                <h4 className="text-headingColor font-[600] text-[18px]">
                                    Happy Clients
                                </h4>
                            </div>
                            <div className="mb-10">
                                <h2 className="text-smallTextColor font-[700] text-[32px]">
                                    <CountUp start={0} end={249} duration={2} suffix={"+"}/>
                                </h2>
                                <h4 className="text-headingColor font-[600] text-[18px]">
                                    Projects Completed
                                </h4>
                            </div>
                        </div>
                        {/* ------------- Hero right content end -------------- */}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection