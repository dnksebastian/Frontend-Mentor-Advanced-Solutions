import './SummaryStep.css'

import StepControls from '../StepControls/StepControls';

const SummaryStep = ({ formStep, handleStepChange }) => {
    return (
        <form className='summary-step-wrap'>
            <div className="step-helper-wrap">
                <div className="step-desc step4-desc">
                    <h1>summary step...</h1>
                    <p></p>
                </div>
            <div className="step-inputs-wrap summary-inputs">
                ...
            </div>
            </div>
            <StepControls formStep={formStep} handleStepChange={handleStepChange} />
        </form>
    );
};

export default SummaryStep