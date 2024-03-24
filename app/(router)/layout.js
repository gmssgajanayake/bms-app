import React from 'react'
import Footer from './_components/Footer'
import Header from './_components/Header'

function layout({children}) {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default layout