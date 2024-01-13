
import '../StyleSheets/ImageBox2.css'
import { Link } from 'react-router-dom';

interface ImageBox2Props{
    artName: string;
    artType: string;
    artDate: string;
    artSrc1: string;
    artSrc2: string;
    linkTo: string;
}

export const ImageBox2: React.FC<ImageBox2Props> = ({artName, artType, artDate, artSrc1, artSrc2, linkTo}) => {
    return(
        
        <div className='ImageBox2Div'>
            <div className='ImageBox2Content'>

            <div className='ImageBox2TextDiv'>
            <p>{artName}</p>
            <p>{artType}</p>
            <p>{artDate}</p>
            </div>

            <div className='ImageBox2ImgDiv'>
            <div className='imageDiv1'>
            <Link to={linkTo}><img src={artSrc1} className='img2Style1'/></Link>              
            </div>

            <div className='imageDiv2'>
            <Link to={linkTo}><img src={artSrc2} className='img2Style2'/></Link>           
            </div>

            </div>

            </div>
            </div>
    )
}