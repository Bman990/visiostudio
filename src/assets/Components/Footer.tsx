import '../StyleSheets/Footer.css'


export const Footer: React.FC = () => {
    return(
        <section className="footerSection">
            <div className="footerContent">

                <div className="rightsDiv">
                <p className="rightsText">2024 Visio Studio All Rights Reserved</p>
                </div>

                <div className="footerInfo">

                <div className='contactTextDiv'>
                    <div className='contactHeaderDiv'>
                    <h2 className='contactHeaderText'>Contact</h2>
                    </div>

                    <div className='contactInfoDiv'>
                    <p className='contactInfoText'>info@visio.studio</p>
                    <p className='contactInfoText'>+1 342 476 8321</p>
                    </div>
                </div>

                <div className='socialTextDiv'>
                    <div className='socialHeaderDiv'>
                    <h2 className='socialHeaderText'>Social</h2>
                    </div>

                    <div className='socialInfoDiv'>
                    <p className='socialInfoText'>Twitter</p>
                    <p className='socialInfoText'>Instagram</p>
                    </div>
                </div>

            </div>
            </div>
        </section>
    )
}