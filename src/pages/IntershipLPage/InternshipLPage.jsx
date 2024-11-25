import PagesNavbar from '../../components/PagesNavbar/PagesNavbar';
import './InternshipLPage.css'
import InternBG from '../../images/InternBG.png';
import JobSearchBar from '../../components/JobSearchBar/JobSearchBar';
import FilterSection from '../../components/FilterSection/FilterSection';
import RecommendationSection from '../../components/RecommendationSection/RecommendationSection';
import Footer from '../../components/footer/footer';

const IntershipLPage = () => {
    return (
        <>
            <div className='main-cnt'>
                <PagesNavbar />
                <div className='top-section'>
                    <img src={InternBG} className='bgimage' alt='BGImage' />
                </div>
                <div className="content">
                    <FilterSection />
                    <div className='main-content'>
                        <JobSearchBar />
                        <RecommendationSection />
                    </div>
                </div>
                <Footer />
            </div>


        </>
    )
}

export default IntershipLPage;