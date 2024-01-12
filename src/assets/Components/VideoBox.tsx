
import '../StyleSheets/VideoBox.css'

interface VideoBoxProps{
    artName: string;
    artType: string;
    artDate: string;
    artSrc1: string;
}

export const VideoBox: React.FC<VideoBoxProps> = ({artName, artType, artDate, artSrc1}) => {
    return(
        
        <div className='VideoBoxDiv'>
            <div className='VideoBoxContent'>

            <div className='VideoBoxTextDiv'>
            <p>{artName}</p>
            <p>{artType}</p>
            <p>{artDate}</p>
            </div>

            <div className='VideoDiv'>
            <video className='videoStyle' autoPlay loop muted>
            <source src={artSrc1} type='video/mp4' />
            Your browser does not support the video tag.
            </video>           
            </div>

            </div>

            </div>
    )
}