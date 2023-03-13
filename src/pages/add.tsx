
import AboutUs from "../components/newladingpage/AboutUs";
import Amazing from "../components/newladingpage/Amazing";
import Breadcrumb from "../components/newladingpage/Breadcrumb";
import CardSection from "../components/newladingpage/CardSection";
import Header from "../components/newladingpage/Header";
import OurTeam from "../components/newladingpage/OurTeam";
import Testimonials from "../components/newladingpage/Testimonials";
import Footer from "../layouts/Footer";

export default function Add (){
    return(

        <>
           <Header/>
        <Breadcrumb/>
      <CardSection/>
      <AboutUs/>
      <Amazing/>
      <Testimonials/>
      <OurTeam/>
      <Footer/>
        </>
    )
}