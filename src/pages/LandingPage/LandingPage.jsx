import React, {useState} from 'react';
import backgroundImage from '../../images/LP_BgImg.jpg';
import SearchBar from '../../components/SearchBar/SearchBar';
import JobCategoryButtons from '../../components/JobCategoryButton/JobCategoryButton';
import './LandingPage.css';
import FeaturedJobs from '../../components/FeaturedJobs/FeaturedJobs';
import Navbar from '../../components/Navbar/Navbar';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import PopularCategory from '../../components/PopularCategory/PopularCategory';
import TopCompanies from '../../components/TopCompanies/TopCompanies';
import Footer from '../../components/footer/footer';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

function LandingPage() {
    const [isSignUpFormVisible, setSignUpFormVisible] = useState(false);

    const handleSignUpClick = () => {
        setSignUpFormVisible(true); // Show SignUpForm when Sign Up button is clicked
    };

    const handleCloseSignUpForm = () => {
        setSignUpFormVisible(false); // Hide SignUpForm
    };
    return (
        <>
        <Navbar onSignUpClick={handleSignUpClick} />
        {isSignUpFormVisible && (
                <SignUpForm isVisible={isSignUpFormVisible} onClose={handleCloseSignUpForm} />
            )}
        <div
            className="landing-page"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                color: '#fff',
                textAlign: 'center',
            }}
        >
            <h1>
                Pursue Work that <br />Fits Your <span className="highlight">Talents.</span>
            </h1>
            <p>Search Thousands of Jobs in Top Industries.</p>
            <SearchBar />
            <JobCategoryButtons />
        </div>
        <FeaturedJobs />
        <HowItWorks />
        <PopularCategory />
        <TopCompanies />
        <Footer />
        </>
        
    );
}

export default LandingPage;
