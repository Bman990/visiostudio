import '../StyleSheets/AlgaeSphere.css'
import { Footer } from './Footer'
import video1 from '/video2Art.mp4'

export const AlgaeSphere: React.FC = () => {
    return(
        <div className="algaeSphereContainer">
            <div className="algaeSphereContent">
                <div className="algaeSphereHeader">
                    <h1 className='algaeSphereHeaderText'>Algae Sphere</h1>
                </div>

                <div className='algaeSphereBody'>
                    <div className='algaeSphereBodyContent'>

                    <div className='algaeSphereinfoDiv'>
                        <h2>
                            Algae Sphere done for Bob's Algae Farm
                        </h2>

                        <p>
                        In this mesmerizing display of artificial intelligence creativity, a captivating scene unfolds as AI-generated algae gracefully circles in a hypnotic dance. 
                        The swirling movement, akin to an intricate choreography, manifests in a perfect circular motion, creating an enchanting visual spectacle.
                        </p>
                    </div>

                    <div className='algaeSpherepictureDiv'>
                    <video className='algaeSphereimageStyle' autoPlay loop muted>
                    <source src={video1} type='video/mp4' />
                    Your browser does not support the video tag.
                    </video> 
                    </div>

                    </div>

                    </div>
                </div>

                <Footer />
            </div>
    )
}