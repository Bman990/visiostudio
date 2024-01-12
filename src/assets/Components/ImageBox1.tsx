import '../StyleSheets/ImageBox1.css'

interface ImageBox1Props {
    artName: string;
    artType: string;
    artDate: string;
    imgSrc: string;
}

export const ImageBox1: React.FC<ImageBox1Props> = ({artName, artType, artDate, imgSrc}) => {
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
                        <img src={imgSrc} className='img1Style'/>
                    </div>

                    </div>
                </div>
        </div>
    )
}