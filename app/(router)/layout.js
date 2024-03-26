"use client"
import React from 'react'
import Footer from './_components/Footer'
import Header from './_components/Header'
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

function layout({children}) {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default layout