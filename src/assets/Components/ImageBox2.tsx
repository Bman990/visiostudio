
import '../StyleSheets/ImageBox2.css'

interface ImageBox2Props{
    artName: string;
    artType: string;
    artDate: string;
    artSrc1: string;
    artSrc2: string;
}

export const ImageBox2: React.FC<ImageBox2Props> = ({artName, artType, artDate, artSrc1, artSrc2}) => {
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
            <img src={artSrc1} className='img2Style1'/>                
            </div>

            <div className='imageDiv2'>
            <img src={artSrc2} className='img2Style2'/>                
            </div>

            </div>

            </div>
            </div>
    )
}