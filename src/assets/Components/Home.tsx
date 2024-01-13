import { Body } from "./Body"
import { Footer } from "./Footer"
import { Hero } from "./Hero"



export const Home: React.FC = () => {
    return(
        <div>
        <Hero />
        <Body />
        <Footer />
        </div>
    )
}