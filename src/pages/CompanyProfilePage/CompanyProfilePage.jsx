import './CompanyProfilePage.css';
import PagesNavbar from '../../components/PagesNavbar/PagesNavbar';
import Footer from '../../components/footer/footer';
import CompanyBG from '../../images/CompanyBG.png';
import CompanyLogo from '../../images/company_logo.png';
import RecruiterCard from '../../components/RecruiterCard/RecruiterCard';
import CompanyDesc from '../../components/CompanyDesc/CompanyDesc';
import CompanyInfo from '../../components/CompanyInfo/CompanyInfo';

const CompanyProfilePage = () => {
    const recruiters = [
        {
            image: '/images/recruiter1.jpg',
            name: 'Susan Jeans',
            role: 'Talent Acquisition Manager',
        },
        {
            image: '/images/recruiter2.jpg',
            name: 'John Doe',
            role: 'Recruiter',
        },
        {
            image: '/images/recruiter2.jpg',
            name: 'John Doe',
            role: 'Recruiter',
        },
    ];
    return (
        <>
        <div className='main-cnt'>
                <PagesNavbar />
                <div className='top-section'>
                    <img src={CompanyBG} className='bgimage' alt='BGImage' />
                    <div className='UpperBg'>
                        <div className='innerCnt1'>
                            <img src={CompanyLogo} alt='CompanyLogo' />
                            <div className='innerCnt1-container'>
                                <h2>Company Name</h2>
                                <h4>Company Role</h4>
                            </div>
                        </div>
                        <div className='innerCnt2'>
                            <button>View open position</button>
                        </div>
                    </div>
                </div>
                <div className="containerMain">
                <div className="left-section">
                        {recruiters.map((recruiter, index) => (
                            <RecruiterCard key={index} recruiter={recruiter} />
                        ))}
                    </div>
                    <div className="middle-section">
                        <CompanyDesc />
                    </div>
                    <div className="right-section">
                        <CompanyInfo />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default CompanyProfilePage;