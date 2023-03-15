import Breadcrumb from "../components/services/Breadcrumb";
import HeroSection from "../components/services/HeroSection";
import OurPortfolio from "../components/services/OurPortfolio";
import WorkForResult from "../components/services/WorkForResult";
import MainLayout from "../layouts/MainLayout";


export default function Services(){
    return(
        <MainLayout>
            <Breadcrumb/>
            <HeroSection/>
            <WorkForResult/>
            <OurPortfolio/>
        </MainLayout>
    )
}