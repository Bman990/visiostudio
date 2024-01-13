
import { Link } from 'react-router-dom';
import '../StyleSheets/VideoBox.css'

interface VideoBoxProps{
    artName: string;
    artType: string;
    artDate: string;
    artSrc1: string;
    linkTo: string;
}

export const VideoBox: React.FC<VideoBoxProps> = ({artName, artType, artDate, artSrc1, linkTo}) => {
    return(
        
        <div className='VideoBoxDiv'>
            <div className='VideoBoxContent'>

            <div className='VideoBoxTextDiv'>
            <p>{artName}</p>
            <p>{artType}</p>
            <p>{artDate}</p>
            </div>

            <div className='VideoDiv'>
            <Link to={linkTo}><video className='videoStyle' autoPlay loop muted>
            <source src={artSrc1} type='video/mp4' />
            Your browser does not support the video tag.
            </video> 
            </Link>          
            </div>

            </div>

            </div>
    )
}