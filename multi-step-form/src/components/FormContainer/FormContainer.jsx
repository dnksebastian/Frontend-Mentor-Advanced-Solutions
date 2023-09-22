import { useFormik } from 'formik';

import './FormContainer.css'

import Sidebar from '../Sidebar/Sidebar';
import StepControls from '../StepControls/StepControls'
import InfoStep from '../InfoStep/InfoStep'

const FormContainer = () => {

    const formik = useFormik({
        initialValues: {},
        onSubmit: values => {
            console.log(values);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className='form-main-wrapper'>
            <Sidebar />
            <div className='step-display-wrapper'>
                <InfoStep />
            </div>
            <StepControls />
        </form>
    )
};


export default FormContainer