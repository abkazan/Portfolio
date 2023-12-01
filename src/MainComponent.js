import HeroSection from "./components/HeroSection";
import AboutPage from "./pages/AboutPage";
import ContactForm from "./pages/ContactForm";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import StoryCarousel from "./components/StoryCarousel";
import styles from './main.module.scss';

const MainComponent = () => {
    return (
        <div className={styles.container}>
            <div id="intro" className={styles.section}>
                <HomePage />
            </div>
            <div id="portfolio" className={styles.section}>
                <Portfolio />
            </div>
            <div id="story" className={styles.section}>
                <StoryCarousel />
            </div>
            <div id="skills" className={styles.section}>
                <AboutPage />
            </div>
            <div id="contact" className={styles.section}>
                <ContactForm />
            </div>

            <HeroSection />
        </div>


    )
}
export default MainComponent;