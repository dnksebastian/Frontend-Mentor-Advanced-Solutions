import './PlansStep.css';
import '../common.css'

import ArcadeIcon from '../../assets/images/icon-arcade.svg'
import AdvancedIcon from '../../assets/images/icon-advanced.svg'
import ProIcon from '../../assets/images/icon-pro.svg'

import { useContext, useRef } from 'react'
import { useForm } from "react-hook-form";

import FormContext from '../../contexts/FormContext';

import StepControls from '../StepControls/StepControls'


const PlansStep = ({formStep, handleStepChange}) => {
    const { register, handleSubmit, watch } = useForm();
    const [ formData, dispatchFormData ] = useContext(FormContext)

    const plansStepRef = useRef()

    const watchBilling = watch('isYearly')

    const onSubmitStep = (data) => {
        console.log('step 2 submitted');
        console.log(data);
        dispatchFormData({...formData, ...data})
    };

    return (
        <form
        className='plans-step-wrap step-form-wrap'
        onSubmit={handleSubmit(onSubmitStep)}
        ref={plansStepRef}
        >
            <div className="step-helper-wrap helper-plans">
                <div className="step-desc step2-desc">
                    <h1>Select your plan</h1>
                    <p>You have the option of monthly or yearly billing.</p>
                </div>
                <div className="inputs-wrap plans-inputs">
                    <div className='plan-input-helper'>
                        <input
                        className='plan-radio-input'
                        type="radio"
                        name='plan-option'
                        id='arcade'
                        value='arcade'
                        defaultChecked
                        {...register('selectedPlan')}
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
                        {...register('selectedPlan')}
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
                        {...register('selectedPlan')}
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
            <StepControls
            formStep={formStep}
            handleStepChange={handleStepChange}
            stepRef={plansStepRef}
            />
        </form>
    );
};

export default PlansStep