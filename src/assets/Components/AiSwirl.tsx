import '../StyleSheets/AiSwirl.css'
import { Footer } from './Footer'
import image1 from '/artImg1.jpg'
import image2 from '/artImg2.jpg'

export const AiSwirl: React.FC = () => {
    return(
        <div className="aiSwirlContainer">
            <div className="aiSwirlContent">
                <div className="aiSwirlHeader">
                    <h1 className='aiSwirlHeaderText'>AI Swirl</h1>
                </div>

                <div className='aiSwirlBody'>
                    <div className='aiSwirlBodyContent'>



                    <div className='aiSwirlpictureDiv'>
                    <div className='aiSwirlpictureContent'>
                    <img src={image1} className='aiSwirlimageStyle'/>
                    <img src={image2} className='aiSwirlimageStyle'/>
                    </div>
                    </div>

                    <div className='aiSwirlinfoDiv'>
                        <h2>
                            AI Swirl done for Chat Bot Development
                        </h2>

                        <p>
                        In this captivating AI-generated artwork, the fusion of technology and artistic expression gives rise to a mesmerizing display of swirling spheres. 
                        The intricate patterns and dynamic movements of the swirling balls are a testament to the creative capabilities of artificial intelligence.
                        </p>
                    </div>

                    </div>

                    </div>
                </div>

                <Footer />
            </div>
    )
}