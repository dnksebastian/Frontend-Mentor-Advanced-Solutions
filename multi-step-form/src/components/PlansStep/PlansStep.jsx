import './PlansStep.css';

import StepControls from '../StepControls/StepControls'


const PlansStep = ({formStep, handleStepChange}) => {
    return (
        <form className='plans-step-wrap'>
            <div className="step-helper-wrap">
                <div className="step-desc step2-desc">
                    <h1>plans step...</h1>
                    <p></p>
                </div>
                <div className="inputs-wrap plans-inputs">

                </div>
            </div>
            <StepControls formStep={formStep} handleStepChange={handleStepChange} />
        </form>
    );
};

export default PlansStep