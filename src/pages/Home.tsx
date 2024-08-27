import HeroSection from "@/components/HeroSection/HeroSection";
import Contact from "./Contact";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import Benefits from "@/components/Benefits/Benefits";
import Wheel from "@/components/Wheel/Wheel";



const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <FeaturedSection></FeaturedSection>
            {/* <WheelComponent></WheelComponent> */}
            <Wheel></Wheel>
            <Testimonials></Testimonials>
            <Benefits></Benefits>
            <Contact></Contact>
        </div>
    );
};

export default Home;