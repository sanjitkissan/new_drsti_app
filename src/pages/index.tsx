import Brandactivation from "../components/landingPage/BrandActivation";
import Breadcrumb from "../components/landingPage/Breadcrumb";
import CardSection from "../components/landingPage/CardSection";
import Galllery from "../components/landingPage/Galllery";
import HeroSection from "../components/landingPage/HeroSection";
import MessageSection from "../components/landingPage/MessageSection";
import OurReachSection from "../components/landingPage/OurReachSection";
import OurWork from "../components/landingPage/OurWork";
import MainLayout from "../layouts/MainLayout";




export default function Home() {
  return (
    <MainLayout>
      <Breadcrumb/>
      <HeroSection/>
      <OurReachSection/>
      <CardSection/>
      <MessageSection/>
      <OurWork/>
      <Brandactivation/>
      <Galllery/>
    </MainLayout>
  )
}
