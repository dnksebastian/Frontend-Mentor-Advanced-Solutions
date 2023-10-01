import './InfoStep.css'
import '../common.css'

import { useContext, useRef } from 'react'
import { useForm } from "react-hook-form";

import FormContext from '../../contexts/FormContext';

import StepControls from '../StepControls/StepControls';

const InfoStep = ({ formStep, handleStepChange }) => {
    const [ formData, dispatchFormData ] = useContext(FormContext)
    const { register, handleSubmit } = useForm({defaultValues:
        {firstName: formData.firstName,
         email: formData.email,
         phone: formData.phone
    }});

    const infoStepRef = useRef()

    const onSubmitStep = (data) => {
        console.log('step 1 submitted');
        dispatchFormData({...formData, ...data})
    }


    return (
        <form
        className='personal-info-wrap step-form-wrap'
        onSubmit={handleSubmit(onSubmitStep)}
        ref={infoStepRef}
        >
            <div className='step-helper-wrap helper-info'>
            <div className="step-desc step1-desc">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            </div>
            <div className="inputs-wrap personal-info-inputs">
                <div className="input-helper">
                    <label htmlFor="first-name">Name</label>
                    <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder='e.g. Stephen King'
                    {...register('firstName')}
                    // defaultValue={formData.firstName}
                    />
                </div> 
                <div className="input-helper">
                    <label htmlFor="email">Email Address</label>
                    <input
                    type="text"
                    id='email'
                    name='email'
                    placeholder='e.g. stephenking@lorem.com'
                    {...register('email')}
                    // defaultValue={formData.email}
                    />
                </div>
                <div className="input-helper">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                    type="text"
                    id='phone'
                    name='phone'
                    placeholder='e.g. +1 234 567 890'
                    {...register('phone')}
                    // defaultValue={formData.phone}
                    />
                </div>
            </div>
            </div>

            <StepControls
            formStep={formStep}
            handleStepChange={handleStepChange}
            submitStep={handleSubmit}
            stepRef={infoStepRef}
            />
            {/* <button>submit</button> */}
        </form>
    );
};

export default InfoStep