import '../StyleSheets/Footer.css'
import { useLocation, useNavigate } from 'react-router-dom';


export const Footer: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
  
    // Check if the current location is the default home page
    const isHomePage = location.pathname === '/';
  
    // Handle clicking the "Back Home" link
    const handleBackHomeClick = () => {
      navigate('/');
    };

    return(
        <section className="footerSection">
            <div className="footerContent">

            {!isHomePage && (
          <div className="backHomeDiv" onClick={handleBackHomeClick}>
            <span className="backHomeLink">Back Home</span>
          </div>
        )}

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

            <div className="rightsDiv">
                <p className="rightsText">2024 Visio Studio All Rights Reserved</p>
            </div>
            </div>

        </section>
    )
}