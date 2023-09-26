import './FormContainer.css'

import { useState } from 'react';

import { FormContextProvider } from '../../contexts/FormContext';

import Sidebar from '../Sidebar/Sidebar';
import InfoStep from '../InfoStep/InfoStep'
import PlansStep from '../PlansStep/PlansStep'
import AddonsStep from '../AddonsStep/AddonsStep'
import SummaryStep from '../SummaryStep/SummaryStep'
import SuccessStep from '../SuccessStep/SuccessStep'

const FormContainer = () => {
    const [formStep, setFormStep] = useState(0);

    console.log('rendered');

    const handleStepChange = (step) => {
        setFormStep(step)
    }

    return (
        <FormContextProvider>
            <div
            className='form-main-wrapper'>
                <Sidebar
                formStep={formStep}
                handleStepChange={handleStepChange} />
                <div className='step-display-wrapper'>
                {formStep === 0 &&
                <InfoStep
                formStep={formStep}
                handleStepChange={handleStepChange}
                />}
                {formStep === 1 &&
                <PlansStep
                formStep={formStep}
                handleStepChange={handleStepChange}
                />}
                {formStep === 2 &&
                <AddonsStep
                formStep={formStep}
                handleStepChange={handleStepChange}
                />}
                {formStep === 3 &&
                <SummaryStep
                formStep={formStep}
                handleStepChange={handleStepChange}
                />}
                {formStep === 4 &&
                <SuccessStep
                formStep={formStep}
                handleStepChange={handleStepChange}
                />}
                </div>
            </div>
        </FormContextProvider>
            )
};

export default FormContainer