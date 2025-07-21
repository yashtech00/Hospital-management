import AppBar from "../components/AppBar";
import Features from "../components/Feature";
import Footer from "../components/footer";
import Hero from "../components/HeroSction";
import HospitalGlimpse from "../components/HospitalGlimpse";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
    return (
        <div className=" ">
            <AppBar />
            <Hero />
            <Features />
            <HowItWorks />
            <HospitalGlimpse />
            <Footer/>
        </div>
    );
}
