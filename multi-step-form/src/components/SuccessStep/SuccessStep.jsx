import './SuccessStep.css'
import '../common.css'

import ThankYouIcon from '../../assets/images/icon-thank-you.svg'
import { useEffect } from 'react';

const SuccessStep = ({ handleStepChange }) => {

    useEffect(() => {
        setTimeout(() => {
            handleStepChange(0)
        }, 3500)
    }, [handleStepChange])

    return (
        <div className='success-wrapper'>
            <div className='step-helper-wrap helper-success'>
                <div className="success-icon-wrapper">
                    <img src={ThankYouIcon} alt="Checkmark on red background" className="success-icon" />
                </div>
                <h1>Thank you!</h1>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </div>
    );
};

export default SuccessStep