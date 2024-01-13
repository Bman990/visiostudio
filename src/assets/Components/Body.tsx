import '../StyleSheets/Body.css'
import { ImageBox1 } from './ImageBox1'
import { ImageBox2 } from './ImageBox2'
import { VideoBox } from './VideoBox'
import imgTest from '/heroStudio2.jpg'
import img1 from '/artImg1.jpg'
import img2 from '/artImg2.jpg'
import img3 from '/artImg3.jpg'
import img4 from '/artImg4.jpg'
import video1 from '/artVideo1.mp4'
import video2 from '/video2Art.mp4'



export const Body: React.FC = () => {
    return(
        <section className="bodySection">
            <div className="bodyContent">
            <ImageBox1 
            artName='FIELD ESCAPE'
            artType='3D ART'
            artDate='2024'
            imgSrc={imgTest}
            linkTo='/visiostudio/fieldescape'
            />

            <ImageBox2
            artName='AI SWIRL'
            artType='AI ART'
            artDate='2024'
            artSrc1={img1}
            artSrc2={img2}
            linkTo='/visiostudio/aiswirl'
            />

            <VideoBox 
            artName='THE PROCESS'
            artType='3D ANIMATION'
            artDate='2024'
            artSrc1={video1}
            linkTo='/visiostudio/theprocess'
            />

            <ImageBox2
            artName='VIBE ZONE'
            artType='3D ART'
            artDate='2024'
            artSrc1={img3}
            artSrc2={img4}
            linkTo='/visiostudio/vibezone'
            />

            <VideoBox 
            artName='ALGAE SPHERE'
            artType='AI ANIMATION'
            artDate='2024'
            artSrc1={video2}
            linkTo='/visiostudio/algaesphere'
            />
        </div>
        </section>
    )
}