// import React from "react";
//
// export const Modal = ({activeID, setShowModal}) => {
//     const portfolio = portfolios.find(portfolio => portfolio.id === activeID);
//     console.log(portfolio.siteUrl);
//     return (
//         <div onClick={()=>setShowModal(false)} className="fixed top-0 left-0 z-10 w-full h-full bg-headingColor bg-opacity-40">
//             <div
//                 className="max-w-[500px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2">
//                 <div className="shadow-2xl">
//                     <figure>
//                         <img className={"rounded-tl-[8px] rounded-tr-[8px] relative"} src={portfolio.imgUrl} alt=""/>
//                         <button onClick={()=>setShowModal(false)} className={"flex items-center justify-center absolute top-0 right-0 pr-1 font-[800] text-headingColor text-[24px]"}><i
//                             className="ri-close-fill"></i></button>
//                     </figure>
//                     <div className="p-5">
//                         <h2 className={"font-[700] text-headingColor text-2xl mb-5"}>{portfolio.title}</h2>
//                         <p className={"text-[15px] leading-7 text-smallTextColor"}>{portfolio.description}</p>
//                         <div className="flex flex-wrap items-center gap-3 mt-5">
//                             <h4 className="text-headingColor text-[18px] font-[700]">
//                                 Technologies :
//                             </h4>
//                             {
//                                 portfolio.technologies.map((item, index) => (
//                                     <span
//                                         key={index}
//                                         className={"bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0"}>
//                                             {item}
//                                     </span>
//                                 ))
//                             }
//                             <a href={portfolio.siteUrl} className={"w-full"}>
//                                 <button
//                                     className="hover:tracking-widest  transition-[500] ease-in duration-200 mt-5 rounded-[8px] tracking-wider w-full text-center py-3 px-4 bg-headingColor text-white ">Watch
//                                     live website
//                                 </button>
//                             </a>
//
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
//
// export default Modal;