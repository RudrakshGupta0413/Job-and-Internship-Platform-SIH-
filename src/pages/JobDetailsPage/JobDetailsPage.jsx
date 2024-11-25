import PagesNavbar from '../../components/PagesNavbar/PagesNavbar';
import './JobDetailsPage.css'
import InternBG from '../../images/InternBG.png';
import Footer from '../../components/footer/footer';
import JobDetailsSearchBar from '../../components/JobDetailsSearchBar/JobDetailsSearchBar';
import { FaBarsStaggered } from "react-icons/fa6";
import JobCardsSection from '../../components/JobCardsSection/JobCardsSection';
import JobDescription from '../../components/JobDescription/JobDescription';

const JobDetailsPage = () => {
    return (
        <>
            <div className='main-cnt'>
                <PagesNavbar />
                <div className='top-section'>
                    <img src={InternBG} className='bgimage' alt='BGImage' />
                </div>
                <JobDetailsSearchBar />
                <div className="container">
                    <div className='random-cnt'>
                        <h2>Recommended</h2>
                        <FaBarsStaggered />
                    </div>
                    <div className='main-details'>
                        <JobCardsSection />
                        <JobDescription />
                    </div>
                </div>
                <Footer />
            </div>


        </>
    )
}

export default JobDetailsPage;