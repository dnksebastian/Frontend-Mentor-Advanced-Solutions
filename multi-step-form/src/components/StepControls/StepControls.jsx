import './StepControls.css';


const StepControls = ({ formStep, handleStepChange }) => {

    const goNextStep = () => {
        if(formStep < 4) {
            handleStepChange(formStep + 1)
        }
    };

    const goPreviousStep = () => {
        if(formStep > 0) {
            handleStepChange(formStep - 1)
        }
    };

    return (
        <div className='step-controls-wrapper'>
            {(formStep > 0 && formStep < 4) && <button
            className='btn-stepchange btn-light'
            id='btn-back'
            type='button'
            onClick={() => goPreviousStep()}
            >Go Back</button>
            }
            {
            (formStep >= 0 && formStep < 4) &&
            <button
            className='btn-stepchange btn-dark'
            id='btn-next'
            type='button'
            onClick={() => goNextStep()}
            >Next Step</button>
            }
        </div>
    );
};

export default StepControls