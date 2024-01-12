import '../StyleSheets/Hero.css'
import Marquee from "react-fast-marquee";



export const Hero: React.FC = () => {
    return(
        <section className='heroSection'>
            <div className='heroContent'>
                <div className='heroHeaderNameDiv'>
                <h1 className='heroHeaderName'>Visio Studio</h1>
                </div>

                <div className='heroHeaderDescWrapper'>
                <div className='heroHeaderDescDiv'>
                <Marquee
                autoFill
                speed={60}
                >
                <p className='marqueeText'>3D ART</p>
                <p className='marqueeText'>AI ART</p>
                <p className='marqueeText'>3D ANIMATION</p>
                <p className='marqueeText'>AI ANIMATION</p>
                </Marquee>
                </div>
                </div>
            </div>
        </section>
    )
}