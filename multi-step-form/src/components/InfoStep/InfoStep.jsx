import './InfoStep.css'
import '../common.css'

import { useContext } from 'react'
import { useForm } from "react-hook-form";

import FormContext from '../../contexts/FormContext';

import StepControls from '../StepControls/StepControls';

const InfoStep = ({ formStep, handleStepChange }) => {
    const { register, handleSubmit } = useForm();
    const [ formData, dispatchFormData ] = useContext(FormContext)

    const onSubmitStep = (data) => {
        console.log('step 1 submitted');
        console.log(data);
        dispatchFormData({...formData, ...data})
    }


    return (
        <form
        className='personal-info-wrap'
        onSubmit={handleSubmit(onSubmitStep)}
        >
            <div className='step-helper-wrap'>
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
                    {...register('firstName')}
                    defaultValue={formData.firstName}
                    />
                </div> 
                <div className="input-helper">
                    <label htmlFor="email">Email Address</label>
                    <input
                    type="text"
                    id='email'
                    {...register('email')}
                    defaultValue={formData.email}
                    />
                </div>
                <div className="input-helper">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                    type="text"
                    id='phone'
                    {...register('phone')}
                    defaultValue={formData.phone}
                    />
                </div>
            </div>
            </div>

            <StepControls
            formStep={formStep}
            handleStepChange={handleStepChange}
            submitStep={handleSubmit}
            />
            {/* <button>submit</button> */}
        </form>
    );
};

export default InfoStep