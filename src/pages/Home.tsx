
import Header_control from "@/components/Header_control.tsx";
import HeroSection from "@/components/HeroSection.tsx";
import FeaturedGrid from "@/components/featuredGrid.tsx";
import Footer from "@/components/Footer.tsx";
export default function Home(){
 
    return (<>
        <Header_control/>
        <HeroSection/>
        <FeaturedGrid/>
            <Footer/>
        </>
    )
}