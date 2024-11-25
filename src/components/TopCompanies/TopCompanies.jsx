import './TopCompanies.css';
import Comp1 from '../../images/comp1.png';
import Comp2 from '../../images/comp2.png';
import Comp3 from '../../images/comp3.png';
import Comp4 from '../../images/comp4.png';
import Comp5 from '../../images/comp5.png';

function TopCompanies() {
  return (
    <section className="popular-category">
      <div className="section-header">
        <h2>Top Companies Hiring Now</h2>
        <a href="#view-all" className="view-all-link">View All &rarr;</a>
      </div>
      <div className="popular-grid">
        <img src={Comp2} alt='comp_1' />
        <img src={Comp1} alt='comp_2' />
        <img src={Comp4} alt='comp_3' />
        <img src={Comp3} alt='comp_4' />
        <img src={Comp5} alt='comp_5' />
      </div>

      <div className="candidate-employer-section">
        <div className="card candidate-card">
          <h3>Become a Candidate</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Cras cursus a dolor convallis <br />efficitur.</p>
          <a href="#register-candidate" className="register-link">Register Now &rarr;</a>
        </div>
        <div className="card employer-card">
          <h3>Become an Employer</h3>
          <p>Cras in massa pellentesque, mollis ligula non, <br />luctus dui. Morbi sed efficitur dolor. Pelque<br /> augue risus, aliquet.</p>
          <a href="#register-candidate" className="register-link">Register Now &rarr;</a>
        </div>
      </div>
    </section>
  )
}

export default TopCompanies;