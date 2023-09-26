import './AddonsStep.css'
import StepControls from '../StepControls/StepControls'

const AddonsStep = ({ formStep, handleStepChange }) => {
    return (
        <form className='addons-form-wrap'>
            <div className="step-helper-wrap">
                <div className="step-desc step3-desc">
                    <h1>addons step...</h1>
                    <p></p>
                </div>
                <div className="inputs-wrap addons-inputs">
                    ...                    
                </div>
            </div>
            <StepControls formStep={formStep} handleStepChange={handleStepChange} />
        </form>
    );
};

export default AddonsStep