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
            {(formStep > 0 && formStep <= 3) && <button
            className='btn-stepchange btn-light btn-back'
            // id='btn-back'
            // type='button'
            onClick={() => goPreviousStep()}
            >Go Back</button>
            }
            {
            (formStep >= 0 && formStep < 3) &&
            <button
            className='btn-stepchange btn-dark btn-next'
            // id='btn-next'
            type='submit'
            // onClick={() => goNextStep()}
            onClick={() => {
                goNextStep()
            }}
            >Next Step</button>
            }
            {
                formStep === 3 && 
                <button
                className='btn-stepchange btn-confirm'
                id='btn-confirm'
                type='submit'
                >Confirm</button>
            }
        </div>
    );
};

export default StepControls