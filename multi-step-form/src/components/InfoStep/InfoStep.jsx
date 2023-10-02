import './InfoStep.css'
import '../common.css'

import { useContext } from 'react'
import { useForm } from "react-hook-form";

import FormContext from '../../contexts/FormContext';

const InfoStep = ({ formStep, handleStepChange }) => {
    const [ formData, dispatchFormData ] = useContext(FormContext)
    const { register, handleSubmit, formState: {errors, isValid} } = useForm({defaultValues:
        {
         firstName: formData.firstName,
         email: formData.email,
         phone: formData.phone
    }, mode: 'onBlur'});


    const onSubmitStep = (data) => {        
        if(isValid) {
            if (formStep === 0) {
                dispatchFormData({...formData, ...data})
                console.log('step 1 submitted');
                handleStepChange(1)
            }
        }
    }


    return (
        <form
        className='personal-info-wrap step-form-wrap'
        onSubmit={handleSubmit(onSubmitStep)}
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
                    aria-invalid={errors?.firstName? 'true' : 'false'}
                    {...register('firstName', {required: 'First name is required', minLength: {value: 3, message: 'Minimum name length is 3'}})}
                    />
                    {errors?.firstName && <span className='input-error-msg'>{errors.firstName.message}</span>}
                </div> 
                <div className="input-helper">
                    <label htmlFor="email">Email Address</label>
                    <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder='e.g. stephenking@lorem.com'
                    aria-invalid={errors?.email? 'true' : 'false'}
                    {...register('email', {required: 'Email is required', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Please enter valid email'}})}
                    />
                    {errors?.email && <span className='input-error-msg'>{errors?.email?.message}</span>}
                </div>
                <div className="input-helper">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                    type="tel"
                    id='phone'
                    name='phone'
                    placeholder='e.g. +1 234 567 890'
                    aria-invalid={errors?.phone? 'true' : 'false'}
                    {...register('phone', {required: 'Phone number is required', pattern: {value: /([0-9\s\\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/, message: 'Please enter valid phone number'}})}
                    />
                    {errors?.phone && <span className='input-error-msg'>{errors?.phone?.message}</span>}
                </div>
            </div>
            </div>

            <div className='step-controls-wrapper'>
                <button
                className='btn-stepchange btn-dark btn-next'
                type='submit'
                >
                Next Step</button>
            </div>


        </form>
    );
};

export default InfoStep