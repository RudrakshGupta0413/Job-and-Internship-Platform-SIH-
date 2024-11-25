import React, { useState } from 'react';
import './SignUpForm.css';
import { useNavigate } from 'react-router-dom';


const SignUpForm = ({ isVisible, onClose }) => {
    // State to track the current page or step
    const [step, setStep] = useState(1);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const navigate = useNavigate();
    // const [isFormComplete, setIsFormComplete] = useState(false);

    // Function to move to the next page
    const goToNextStep = () => {
        setStep(prevStep => prevStep + 1);
    };

    const goToPreviousStep = () => {
        setStep(prevStep => (prevStep > 1 ? prevStep - 1 : prevStep));
    };

    const handleCheckboxChange = (e) => {
        setTermsAccepted(e.target.checked);
    };

    const handleConfirmClick = () => {
        navigate('/internship')
    }

    // const handleFormSubmit = () => {
    //     // Handle form submission logic here
    //     setIsFormComplete(true);
    // };

    return (
        <div className={`signup-container ${isVisible ? 'visible' : ''}`}>
              <button className="back-btn" onClick={step === 1 ? onClose : goToPreviousStep}>
                <span>&larr;</span>
            </button>

            <div className='top-container'>
                <div className='upper-cnt'>
                    <h2>Create account.</h2>
                    <p>Already have an account? <a href="#">Log In</a></p>
                </div>
                <div className='upper-cnt'>
                    <button className='types'>Employers</button>
                </div>
            </div>

            {step === 1 && (
                <form className="signup-form" onSubmit={(e) => {
                    e.preventDefault();
                    goToNextStep();
                }}>
                    <div className="form-row">
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="Username" />
                    </div>
                    <input id='innput' type="text" placeholder="Phone no." />
                    <input id='innput'  type="email" placeholder="Email address" />
                    <input id='innput'  type="password" placeholder="Password"/>
                    <input id='innput' type="password" placeholder="Confirm Password" />
                    <button type="submit" className="create-account-btn">
                        Create Account <span>&rarr;</span>
                    </button>
                </form>
            )}

            {step === 2 && (
                <form className="signup-form" onSubmit={(e) => {
                    e.preventDefault();
                    goToNextStep();
                }}>
                    <h3 className='form-heading'>Place Related</h3>
                    <input type="text" placeholder="Place of Residence"/>
                    <div className="terms-condition">
                        <label>
                            <input type="checkbox" checked={termsAccepted} onChange={handleCheckboxChange} />
                            Same as Permanent Address
                        </label>
                    </div>
                    <input type="text" placeholder="Permanent Address"/>
                    <input type="text" placeholder="Choose location for work"/>
                    <input type="text" placeholder="Experience"/>
                    <div className="terms-condition">
                        <label>
                            <input type="checkbox" checked={termsAccepted} onChange={handleCheckboxChange} />
                            I've read and agree with your <a href="#">Terms and Conditions</a>
                        </label>
                    </div>
                    <button type="Next" className="create-account-btn">
                        Next <span>&rarr;</span>
                    </button>
                </form>
            )}

            {step === 3 && (
                <form className="signup-form">
                    <h3 className='form-heading'>Job Related</h3>
                    <input type="text" placeholder="Preferred Job Type"/>
                    <input type="text" placeholder="Work mode"/>
                    <input type="text" placeholder="Experience"/>
                    <button type="button" className="create-account-btn" onClick={handleConfirmClick}>
                        Confirm <span>&rarr;</span>
                    </button>
                    {/* {isFormComplete && <SignUpSuccess />} */}
                </form>
            )}
        </div>
    );
};

export default SignUpForm;
