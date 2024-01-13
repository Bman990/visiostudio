import '../StyleSheets/ImageBox1.css'
import { Link } from 'react-router-dom';

interface ImageBox1Props {
    artName: string;
    artType: string;
    artDate: string;
    imgSrc: string;
    linkTo: string;
}

export const ImageBox1: React.FC<ImageBox1Props> = ({artName, artType, artDate, imgSrc, linkTo}) => {
    return(
        <div>
            <div className='ImageBox1Div'>
                <div className='ImageBox1Content'>

                    <div className='ImageBox1TextDiv'>
                        <p>{artName}</p>
                        <p>{artType}</p>
                        <p>{artDate}</p>
                        </div>
 
                    <div className='ImageBox1ImgDiv'>
                       <Link to={linkTo}><img src={imgSrc} className='img1Style'/></Link> 
                    </div>

                    </div>
                </div>
        </div>
    )
}