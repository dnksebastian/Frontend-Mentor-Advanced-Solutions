import './SummaryStep.css'
import '../common.css'

import { useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";

import FormContext from '../../contexts/FormContext';

const SummaryStep = ({ formStep, handleStepChange }) => {
    const [ formData, dispatchFormData ] = useContext(FormContext)
    const { handleSubmit, formState: { isValid } } = useForm({defaultValues: {...formData}});
    const [totalFinalPrice, setTotalFinalPrice] = useState(0);



    useEffect(() => {
        const allAddonPricesEls = Array.from(
            document.querySelectorAll('.summary-addon-price')
        )
        const planPriceElementEl = document.querySelector('.summary-plan-price')

        const addonTxtPrices = allAddonPricesEls.map(el => el.textContent)
        const planTxtPrice = planPriceElementEl.textContent

        // this extracts numbers from the price elements
        const addonNumPrices = addonTxtPrices.map(p => +p.split('$').pop().split('/')[0])
        const planNumPrice = +planTxtPrice.split('$').pop().split('/')[0]

        const totalFinal = [...addonNumPrices, planNumPrice].reduce((prev, next) => prev + next, 0)

        setTotalFinalPrice(totalFinal)

    }, [formData])

    const pickPlanPrice = (planOption, isYearly) => {
        let finalPrice

        if (planOption === 'arcade') {
            isYearly ? finalPrice = '$90/yr' : finalPrice = '$9/mo'
        } else if (planOption === 'advanced') {
            isYearly ? finalPrice = '$120/yr' : finalPrice = '$12/mo'
        }
        else if (planOption === 'pro') {
            isYearly ? finalPrice = '$150/yr' : finalPrice = '$15/mo'
        }
        else {
            return null
        }

        return finalPrice

    }

    const pickAddon = (addonOption) => {
        switch(addonOption) {
            case 'online-service':
                return 'Online service'
            case 'storage':
                return 'Larger storage'
            case 'customizable-profile':
                return 'Customizable profile'
            default:
                return null
        }
    }

    const pickAddonPrice = (addonOption, isYearly) => {
        let finalAddonPrice

        if(addonOption === 'online-service') {
            isYearly ? finalAddonPrice = '+$10/yr' : finalAddonPrice = '+$1/mo'
        }
        else if (addonOption === 'storage') {
            isYearly ? finalAddonPrice = '+$20/yr' : finalAddonPrice = '+$2/mo'
        }
        else if (addonOption === 'customizable-profile') {
            isYearly ? finalAddonPrice = '+$20/yr' : finalAddonPrice = '+$2/mo'
        }
        else {
            return null
        }

        return finalAddonPrice
    }

    const onSubmitStep = () => {
        if(isValid) {
            if(formStep === 3) {
                console.log('step 4 submitted');
                console.log(formData);
                dispatchFormData({...formData})
                dispatchFormData({
                    firstName: '',
                    email: '',
                    phone: '',
                    selectedPlan: '',
                    isYearly: false,
                    addons: [],
                })
                handleStepChange(4)
            }
        }
    }

    return (
        <form
        className='summary-step-wrap step-form-wrap'
        onSubmit={handleSubmit(onSubmitStep)}
        >
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
                                    <span className="chosen-plan-name">
                                        {formData?.selectedPlan}
                                    </span>
                                    <span className="chosen-billing-option">
                                        ({formData.isYearly? 'Yearly' : 'Monthly'})
                                    </span>
                                </p>
                                <button
                                onClick={() => {
                                    handleStepChange(1)
                                }}
                                type='button'
                                className='btn-summary-change'>Change</button>
                            </div>
                            <p className='summary-plan-price'>
                                {pickPlanPrice(formData.selectedPlan, formData.isYearly)}
                            </p>
                        </div>
                        <ul className="summary-addons-list">
                            {formData.addons?.map(a =>
                            <li key={a}>
                                <span className='summary-chosen-addon'>
                                    {pickAddon(a)}
                                </span>
                                <span className='summary-addon-price'>
                                    {pickAddonPrice(a, formData.isYearly)}
                                </span>
                            </li>)}
                            {formData.addons.length === 0 ?
                            <li>
                                <span className='summary-chosen-addon'>
                                    No addons selected
                                </span>
                            </li>
                            :
                            null
                            }
                        </ul>
                    </div>
                        <div className="total-display">
                            <p>Total<span className='total-billing-option'>
                                {formData.isYearly ? '(per year)' : '(per month)'}
                                </span></p>
                            <p className='total-price'>
                                {`+$${totalFinalPrice}/${formData.isYearly ? 'yr' : 'mo'}`}
                            </p>
                        </div>
                </div>
            </div>

            <div className='step-controls-wrapper'>
                <button
                className='btn-stepchange btn-light btn-back'
                type='button'
                onClick={() => {
                    if(formStep === 3) {
                        handleStepChange(2)
                    }
                }}
                >Go Back</button>
                <button
                className='btn-stepchange btn-dark btn-confirm'
                id='btn-confirm'
                >Confirm</button>
            </div>


        </form>
    );
};

export default SummaryStep