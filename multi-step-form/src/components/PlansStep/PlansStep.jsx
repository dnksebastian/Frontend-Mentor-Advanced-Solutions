import './PlansStep.css';
import '../common.css'

import ArcadeIcon from '../../assets/images/icon-arcade.svg'
import AdvancedIcon from '../../assets/images/icon-advanced.svg'
import ProIcon from '../../assets/images/icon-pro.svg'

import { useContext } from 'react'
import { useForm } from "react-hook-form";

import FormContext from '../../contexts/FormContext';


const PlansStep = ({formStep, handleStepChange}) => {
    const [ formData, dispatchFormData ] = useContext(FormContext)
    const { register, handleSubmit, watch, formState: {errors, isValid} } = useForm({defaultValues: {
        selectedPlan: formData.selectedPlan,
        isYearly: formData.isYearly
    }});

    const watchBilling = watch('isYearly')

    const onSubmitStep = (data) => {

        if(isValid) {
            if(formStep === 1) {
                console.log('step 2 submitted');
                dispatchFormData({...formData, ...data})
                handleStepChange(2)
            }
        }
    };

    return (
        <form
        className='plans-step-wrap step-form-wrap'
        onSubmit={handleSubmit(onSubmitStep)}
        >
            <div className="step-helper-wrap helper-plans">
                <div className="step-desc step2-desc">
                    <h1>Select your plan</h1>
                    <p>You have the option of monthly or yearly billing.</p>
                </div>
                <div className="inputs-wrap plans-inputs">
                    <fieldset
                    className='plans-fieldset'
                        aria-invalid={errors?.selectedPlan? 'true' : 'false'}
                    >
                    <legend className='sr-only'>Choose plan option</legend>
                    <div className='plan-input-helper'>
                        <input
                        className='plan-radio-input'
                        type="radio"
                        name='plan-option'
                        id='arcade'
                        value='arcade'
                        defaultChecked={formData.selectedPlan === 'arcade'}
                        {...register('selectedPlan', {required: 'Please choose a plan option'})}
                        />
                        <label htmlFor="arcade">
                            <div className="icon-wrap">
                                <img src={ArcadeIcon} alt="Joystick on orange background" className="plan-icon" />
                            </div>
                            <div className="plan-label-helper">
                                <p>Arcade</p>
                                <p>
                                    {watchBilling ? '$90/yr' : '$9/mo'}
                                </p>
                                <p
                                className={`billing-bonus-info ${watchBilling ? 'show-bonus' : ''}`}
                                >2 months free</p>
                            </div>
                        </label>
                    </div>
                    <div className='plan-input-helper'>
                        <input
                        className='plan-radio-input'
                        type="radio"
                        name='plan-option'
                        id='advanced'
                        value='advanced'
                        defaultChecked={formData.selectedPlan === 'advanced'}
                        {...register('selectedPlan', {required: 'Please choose a plan option'})}
                        />
                        <label htmlFor="advanced">
                        <div className="icon-wrap">
                                <img src={AdvancedIcon} alt="Gaming pad on red background" className="plan-icon" />
                            </div>
                            <div className="plan-label-helper">
                                <p>Advanced</p>
                                <p>
                                    {watchBilling ? '$120/yr' : '$12/mo'}
                                </p>
                                <p
                                className={`billing-bonus-info ${watchBilling ? 'show-bonus' : ''}`}
                                >2 months free</p>
                            </div>
                        </label>
                    </div>
                    <div className='plan-input-helper'>
                        <input
                        className='plan-radio-input'
                        type="radio"
                        name='plan-option'
                        id='pro'
                        value='pro'
                        defaultChecked={formData.selectedPlan === 'pro'}
                        {...register('selectedPlan', {required: 'Please choose a plan option'})}
                        />
                        <label htmlFor="pro">
                        <div className="icon-wrap">
                                <img src={ProIcon} alt="Gaming pad on purple background" className="plan-icon" />
                            </div>
                            <div className="plan-label-helper">
                                <p>Pro</p>
                                <p>
                                    {watchBilling ? '$150/yr' : '$15/mo'}
                                </p>
                                <p
                                className={`billing-bonus-info ${watchBilling ? 'show-bonus' : ''}`}
                                >2 months free</p>
                            </div>
                        </label>
                    </div>
                    {errors?.selectedPlan && <span className='input-error-msg fieldset-error'>{errors?.selectedPlan?.message}</span>}
                    </fieldset>
                    <div className="input-helper checkbox-helper">

                        <label className='billing-switch'>
                            <span className='sr-only'>Billing option toggle</span>
                            <span
                            className={`billing-option-name ${watchBilling ? '' : 'billing-selected'}`}
                            >Monthly</span>
                            <div className="switch-helper">
                                <input
                                className='billing-checkbox'
                                type="checkbox"
                                id='billing-option'
                                {...register('isYearly')}
                                />
                                <span className="slider"></span>
                            </div>
                            <span
                            className={`billing-option-name ${watchBilling ? 'billing-selected' : ''}`}
                            >Yearly</span>
                        </label>
                    </div>

                </div>
            </div>

            <div className="step-controls-wrapper">
                <button
                className='btn-stepchange btn-light btn-back'
                type='button'
                onClick={() => {
                    if(formStep === 1) {
                        handleStepChange(0)
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

export default PlansStep