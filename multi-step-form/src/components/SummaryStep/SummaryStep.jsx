import './SummaryStep.css'
import '../common.css'

import { useContext, useRef } from 'react'
import { useForm } from "react-hook-form";

import FormContext from '../../contexts/FormContext';

import StepControls from '../StepControls/StepControls';

const SummaryStep = ({ formStep, handleStepChange }) => {
    const { handleSubmit } = useForm();
    const [ formData, dispatchFormData ] = useContext(FormContext)

    const summaryStepRef = useRef()

    const onSubmitStep = (data) => {
        console.log('step 4 submitted');
        console.log(data);
        console.log(formData);
        dispatchFormData({...formData, ...data})
    }

    return (
        <form
        className='summary-step-wrap step-form-wrap'
        onSubmit={handleSubmit(onSubmitStep)}
        ref={summaryStepRef}
        >
            <div className="step-helper-wrap helper-summary">
                <div className="step-desc step4-desc">
                    <h1>Finishing up</h1>
                    <p>Double-check everything looks OK before confirming.</p>
                </div>
            <div className="step-inputs-wrap summary-inputs">
                ... selected plan ...
                change button
                --------
                list of selected addons ...
            </div>
            <div className="total-display">
                <p>Total (per month/year)</p>
                <p>+12/mo</p>
            </div>
            </div>
            <StepControls
            formStep={formStep}
            handleStepChange={handleStepChange}
            stepRef={summaryStepRef}
            />
        </form>
    );
};

export default SummaryStep