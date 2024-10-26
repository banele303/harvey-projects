import Services from "@/components/2ui/services";
import Navbar from "../about-us/ui/Navbar";
import DeckingServices from "./decking-services";
import FRQ from "./FRQ";
import Footer from "@/components/footer";


export default function Home() {
    return (
        <div>
            <Navbar />
            <DeckingServices />
            <Services />
            <FRQ />
            <Footer />
        </div>
    )

}