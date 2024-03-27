import React from "react";

function Contact() {
    return (
        <section className={"pt-10"} id={"admin"}>
            <div className="container pt-14 pb-20">
                <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                    <div data-aos={"fade-right"} data-aos-duration={"1500"} className="basis-1/2 mt-10 sm:mt-0">
                        <figure className="flex items-center justify-center">
                            <img src={"/boy-with-computer.png"} alt="" className=""/>
                        </figure>
                    </div>
                    <div data-aos={"fade-left"} data-aos-duration={"1500"} className="w-full md:basis-1/2">
                        <h5 data-aos={"fade-left"} data-aos-duration={"1500"}
                            className="text-headingColor text-[16px] font-[600]">
                            Why admin for this
                        </h5>
                        <h1 data-aos={"fade-up"} data-aos-duration={"1500"}
                            className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[40px] mt-5">
                            All member's activities <br/>only can handed by admin
                        </h1>
                        <p data-aos={"fade-right"} data-aos-duration={"1500"}
                           className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10">
                            <span>
                               <i className="ri-apps-2-line"></i>
                            </span>

                            Admin-exclusive control encompasses all financial management aspects, from budget allocation
                            to expenditure tracking. Only the administrator holds authority over budget management,
                            payments, and discerning expenditure purposes. This ensures streamlined financial oversight,
                            preventing unauthorized usage and maintaining transparency within the organization. Admin
                            exclusivity fosters accountability, as all financial activities are centralized under their
                            purview. Thus, by consolidating responsibility in the hands of the administrator, the system
                            ensures efficient financial management and upholds fiscal integrity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact