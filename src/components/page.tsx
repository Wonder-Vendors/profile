import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

const Page = ({children}: {children: React.ReactNode}) => {
    return(
        <>
            <Head>
                <title>Wonder Vendors</title>
            </Head>

            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Page;