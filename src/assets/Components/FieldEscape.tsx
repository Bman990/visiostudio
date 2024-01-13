import '../StyleSheets/FieldEscape.css'
import { Footer } from './Footer'
import FEImage from '/heroStudio2.jpg'

export const FieldEscape: React.FC = () => {
    return(
        <div className="fieldEscapeContainer">
            <div className="fieldEscapeContent">
                <div className="fieldEscapeHeader">
                    <h1 className='fieldEscapeHeaderText'>Field Escape</h1>
                </div>

                <div className='fieldEscapeBody'>
                    <div className='fieldEscapeBodyContent'>

                    <div className='FEinfoDiv'>
                        <h2>
                            Field Escape done for JohnMart
                        </h2>

                        <p>
                            In this mesmerizing 3D art piece, a vast field unfolds beneath a boundless sky, creating an immersive canvas of natural beauty. 
                            The artist skillfully captures the essence of the open landscape, with lush grassy plains stretching as far as the eye can see. 
                            The dynamic interplay of sunlight and shadows dances across the field, adding depth and realism to the scene.
                        </p>
                    </div>

                    <div className='FEpictureDiv'>
                    <img src={FEImage} className='FEimageStyle'/>
                    </div>

                    </div>

                    </div>
                </div>

                <Footer />
            </div>
    )
}