import './Sidebar.css'

const Sidebar = ({ formStep }) => {
    return (
        <div className='sidebar-wrapper'>
            <div className="controls-helper">
                <label className='control-label-wrap' htmlFor="step1">
                    <input
                    className='control-input'
                    type="radio"
                    name="formstep"
                    value="0"
                    id='step1'
                    data-step="1"
                    checked={formStep === 0}
                    readOnly
                    />
                    <div className="stepper-inner-helper">
                        <span className="step-num">Step 1</span>
                        <span className="step-name">Your Info</span>
                    </div>
                </label>
                <label className='control-label-wrap' htmlFor="step2">
                    <input
                    className='control-input'
                    type="radio"
                    name="formstep"
                    value="1"
                    id='step2'
                    data-step="2"
                    checked={formStep === 1}
                    readOnly
                    />
                    <div className="stepper-inner-helper">
                        <span className="step-num">Step 2</span>
                        <span className="step-name">Select Plan</span>
                    </div>
                </label>
                <label className='control-label-wrap' htmlFor="step3">
                    <input
                    className='control-input'
                    type="radio"
                    name="formstep"
                    value="2"
                    id='step3'
                    data-step="3"
                    checked={formStep === 2}
                    readOnly
                    />
                    <div className="stepper-inner-helper">
                        <span className="step-num">Step 3</span>
                        <span className="step-name">Add-Ons</span>
                    </div>
                </label>
                <label className='control-label-wrap' htmlFor="step4">
                    <input
                    className='control-input'
                    type="radio"
                    name="formstep"
                    value="3"
                    id='step4'
                    data-step="4"
                    checked={formStep === 3}
                    readOnly
                    />
                <div className="stepper-inner-helper">
                        <span className="step-num">Step 4</span>
                        <span className="step-name">Summary</span>
                </div>
                </label>
            </div>
        </div>
    );
};

export default Sidebar