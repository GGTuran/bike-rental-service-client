import HeroSection from "@/components/HeroSection/HeroSection";
import Contact from "./Contact";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import Benefits from "@/components/Benefits/Benefits";


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <FeaturedSection></FeaturedSection>
            <Testimonials></Testimonials>
            <Benefits></Benefits>
            <Contact></Contact>
        </div>
    );
};

export default Home;