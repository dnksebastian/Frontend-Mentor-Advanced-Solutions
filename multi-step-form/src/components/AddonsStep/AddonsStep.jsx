import './AddonsStep.css'
import '../common.css'

import { useContext, useRef } from 'react'
import { useForm } from "react-hook-form";

import FormContext from '../../contexts/FormContext';


const AddonsStep = ({ formStep, handleStepChange }) => {
    const [ formData, dispatchFormData ] = useContext(FormContext)
    const { register, handleSubmit, formState: {isValid} } = useForm({defaultValues: {
        addons: formData.addons
    }});

    const addonsStepRef = useRef()

    const onSubmitStep = (data) => {
        if(isValid) {
            if(formStep === 2) {
                console.log('step 3 submitted');
                dispatchFormData({...formData, ...data})
                handleStepChange(3)
            }
        }
    }


    return (
        <form
        className='addons-form-wrap step-form-wrap'
        onSubmit={handleSubmit(onSubmitStep)}
        ref={addonsStepRef}
        >
            <div className="step-helper-wrap addons-info">
                <div className="step-desc step3-desc">
                    <h1>Pick add-ons</h1>
                    <p>Add-ons help enhance your gaming experience.</p>
                </div>
                <div className="inputs-wrap addons-inputs">
                    <div className="input-helper">
                        <input
                        type="checkbox"
                        id='online-service-checkbox'
                        name='addon-checkbox'
                        value='online-service'
                        {...register('addons')}
                        />
                        <label
                        className='addons-label'
                        htmlFor="online-service-checkbox">
                            <span>Online service</span>
                            <span>Access to multiplayer games</span>
                        </label>
                        <p className='cost-info'>
                            {formData.isYearly ? "+$10/yr" : "+$1/mo"}
                        </p>
                    </div>
                    <div className="input-helper">
                        <input
                        type="checkbox"
                        id='storage-checkbox'
                        name='addon-checkbox'
                        value='storage'
                        {...register('addons')}
                        />
                        <label
                        className='addons-label'
                        htmlFor="storage-checkbox">
                            <span>Larger storage</span>
                            <span>Extra 1TB of cloud save</span>
                        </label>
                        <p className='cost-info'>
                            {formData.isYearly ? "+$20/yr" : "+$2/mo"}
                        </p>
                    </div>
                    <div className="input-helper">
                        <input
                        type="checkbox"
                        id='customizable-profile-checkbox'
                        name='addon-checkbox'
                        value='customizable-profile'
                        {...register('addons')}
                        />
                        <label
                        className='addons-label'
                        htmlFor="customizable-profile-checkbox">
                            <span>Customizable Profile</span>
                            <span>Custom theme on your profile</span>
                        </label>
                        <p className='cost-info'>
                            {formData.isYearly ? "+$20/yr" : "+$2/mo"}
                        </p>
                    </div>
                </div>
            </div>
            <div className='step-controls-wrapper'>
                <button
                className='btn-stepchange btn-light btn-back'
                type='button'
                onClick={() => {
                    if(formStep === 2) {
                        handleStepChange(1)
                    }
                }}
                >Go Back</button>
                <button
                className='btn-stepchange btn-dark btn-next'
                >Next Step</button>
            </div>
    
        </form>
    );
};

export default AddonsStep