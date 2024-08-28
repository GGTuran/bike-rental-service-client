import HeroSection from "@/components/HeroSection/HeroSection";
import Contact from "./Contact";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import Benefits from "@/components/Benefits/Benefits";
import Wheel from "@/components/Wheel/Wheel";
import CompareList from "@/components/Comparison/CompareList";
import Search from "@/components/SearchBar/Search";



const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <FeaturedSection></FeaturedSection>
            <Search></Search>
            {/* <WheelComponent></WheelComponent> */}
            <Wheel></Wheel>
            <CompareList></CompareList>
            <Testimonials></Testimonials>
            <Benefits></Benefits>
            <Contact></Contact>
        </div>
    );
};

export default Home;