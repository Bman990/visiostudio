import '../StyleSheets/VibeZone.css'
import { Footer } from './Footer'
import image1 from '/artImg3.jpg'
import image2 from '/artImg4.jpg'

export const VibeZone: React.FC = () => {
    return(
        <div className="vibeZoneContainer">
            <div className="vibeZoneContent">
                <div className="vibeZoneHeader">
                    <h1 className='vibeZoneHeaderText'>Vibe Zone</h1>
                </div>

                <div className='vibeZoneBody'>
                    <div className='vibeZoneBodyContent'>



                    <div className='vibeZonepictureDiv'>
                    <div className='vibeZonepictureContent'>
                    <img src={image1} className='vibeZoneimageStyle'/>
                    <img src={image2} className='vibeZoneimageStyle'/>
                    </div>
                    </div>

                    <div className='vibeZoneinfoDiv'>
                        <h2>
                            Vibe Zone done for Cotton Candy Soda
                        </h2>

                        <p>
                        In this evocative 3D artwork, a surreal and dreamlike world unfolds, echoing the aesthetics of the vaporwave movement. 
                        The visual landscape is a hypnotic fusion of nostalgia, neon, and futuristic elements, creating a vibrant and otherworldly experience.
                        </p>
                    </div>

                    </div>

                    </div>
                </div>

                <Footer />
            </div>
    )
}