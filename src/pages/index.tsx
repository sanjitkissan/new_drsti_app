import Brandactivation from "../components/landingPage/BrandActivation";
import Breadcrumb from "../components/landingPage/Breadcrumb";
import CardSection from "../components/landingPage/CardSection";
import HeroSection from "../components/landingPage/HeroSection";
import OurReachSection from "../components/landingPage/OurReachSection";
import OurWork from "../components/landingPage/OurWork";
import MainLayout from "../layouts/MainLayout";




export default function Home() {
  return (
    <MainLayout>
      <Breadcrumb/>
      <HeroSection/>
      <CardSection/>
      <OurWork/>
      <Brandactivation/>
      <OurReachSection/>
    </MainLayout>
  )
}
