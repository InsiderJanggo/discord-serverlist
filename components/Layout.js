import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";


export default function Layout({ children }) {
    return(
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}