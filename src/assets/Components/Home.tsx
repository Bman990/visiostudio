import { Body } from "./Body"
import { Footer } from "./Footer"
import { Hero } from "./Hero"
import '../StyleSheets/Hero.css'



export const Home: React.FC = () => {
    return(
        <div className="homeSection">
        <Hero />
        <Body />
        <Footer />
        </div>
    )
}