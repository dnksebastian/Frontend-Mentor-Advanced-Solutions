import { useFormik } from 'formik';
import { useState } from 'react';

import './FormContainer.css'

import Sidebar from '../Sidebar/Sidebar';
import StepControls from '../StepControls/StepControls'
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

    const formik = useFormik({
        initialValues: {},
        onSubmit: values => {
            console.log(values);
        }
    })


    const displayFormStep = (step) => {
        switch(step) {
            case 0:
                return <InfoStep />;
            case 1:
                return <PlansStep />;
            case 2:
                return <AddonsStep />;
            case 3:
                return <SummaryStep />;
            case 4:
                return <SuccessStep />;
            default:
                return <InfoStep />;
        }
    };

    return (
        <form onSubmit={formik.handleSubmit} className='form-main-wrapper'>
            <Sidebar formStep={formStep} handleStepChange={handleStepChange} />
            <div className='step-display-wrapper'>
                {displayFormStep(formStep)}
            </div>
            <StepControls formStep={formStep} handleStepChange={handleStepChange} />
        </form>
    )
};


export default FormContainer