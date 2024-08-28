import HeroSection from "@/components/HeroSection/HeroSection";
import Contact from "./Contact";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import Benefits from "@/components/Benefits/Benefits";
import Wheel from "@/components/Wheel/Wheel";
import CompareList from "@/components/Comparison/CompareList";



const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <FeaturedSection></FeaturedSection>
            {/* <WheelComponent></WheelComponent> */}
            <Wheel></Wheel>
            <Testimonials></Testimonials>
            <Benefits></Benefits>
            <CompareList></CompareList>
            <Contact></Contact>
        </div>
    );
};

export default Home;