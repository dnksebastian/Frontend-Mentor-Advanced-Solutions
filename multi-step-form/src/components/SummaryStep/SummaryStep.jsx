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
        ref={summaryStepRef}>
            <div className="step-helper-wrap helper-summary">
                <div className="step-desc step4-desc">
                    <h1>Finishing up</h1>
                    <p>Double-check everything looks OK before confirming.</p>
                </div>
                <div className="step-inputs-wrap summary-inputs">
                    <div className='summary-inputs-outer'>
                        <div className="summary-plan-helper">
                            <div className="summary-plan-inner">
                                <p className='summary-chosen-plan'>
                                    <span className="chosen-plan-name">Arcade</span>
                                    <span className="chosen-billing-option"> (Monthly)</span>
                                </p>
                                <button
                                onClick={() => {
                                    console.log('change');
                                }}
                                type='button'
                                className='btn-summary-change'>Change</button>
                            </div>
                            <p className='summary-plan-price'>$9/mo</p>
                        </div>
                        <ul className="summary-addons-list">
                            <li>
                                <span className='summary-chosen-addon'>Online service</span>
                                <span className='summary-addon-price'>+$1/mo</span>
                            </li>
                            <li>
                                <span className='summary-chosen-addon'>Larger storage</span>
                                <span className='summary-addon-price'>+$2/mo</span>
                            </li>
                        </ul>
                    </div>
                        <div className="total-display">
                            <p>Total<span className='total-billing-option'>(per month)</span></p>
                            <p className='total-price'>+$12/mo</p>
                        </div>
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