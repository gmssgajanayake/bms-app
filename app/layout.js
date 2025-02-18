import {Inter} from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'
import {Metadata} from 'next';

const inter = Inter({subsets: ["latin"]});


export default function RootLayout({children}) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: [],
                variables: {colorPrimary: 'black'},
                signIn: {
                    baseTheme: [],
                    variables: {colorPrimary: 'black'}
                }
            }}
        >
            <html className={"scroll-smooth"}  lang="en">
            <body className={inter.className}>
            {children}
            </body>
            </html>
        </ClerkProvider>
    );
}
