import '../StyleSheets/TheProcess.css'
import { Footer } from './Footer'
import video1 from '/artVideo1.mp4'

export const TheProcess: React.FC = () => {
    return(
        <div className="theProcessContainer">
            <div className="theProcessContent">
                <div className="theProcessHeader">
                    <h1 className='theProcessHeaderText'>The Process</h1>
                </div>

                <div className='theProcessBody'>
                    <div className='theProcessBodyContent'>

                    <div className='theProcessinfoDiv'>
                        <h2>
                            The Process done for Bomb Defuse Inc Game
                        </h2>

                        <p>
                        The predominant green and black palette creates a sense of technological sophistication, emphasizing the radar's cutting-edge capabilities. 
                        The luminous green echoes the precision and efficiency associated with advanced monitoring systems, while the contrasting 
                        black background enhances the overall visual impact.
                        </p>
                    </div>

                    <div className='theProcesspictureDiv'>
                    <video className='theProcessimageStyle' autoPlay loop muted>
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