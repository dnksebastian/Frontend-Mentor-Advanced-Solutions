import './Sidebar.css'

const Sidebar = ({ formStep, handleStepChange }) => {
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
                    checked={formStep === 0}
                    onChange={() => handleStepChange(0)}
                    />
                <span className='control-desc'>1</span>
                </label>
                <label className='control-label-wrap' htmlFor="step2">
                    <input
                    className='control-input'
                    type="radio"
                    name="formstep"
                    value="1"
                    id='step2'
                    checked={formStep === 1}
                    onChange={() => handleStepChange(1)}
                    />
                    <span className='control-desc'>2</span>
                </label>
                <label className='control-label-wrap' htmlFor="step3">
                    <input
                    className='control-input'
                    type="radio"
                    name="formstep"
                    value="2"
                    id='step3'
                    checked={formStep === 2}
                    onChange={() => handleStepChange(2)}
                    />
                    <span className='control-desc'>3</span>
                </label>
                <label className='control-label-wrap' htmlFor="step4">
                    <input
                    className='control-input'
                    type="radio"
                    name="formstep"
                    value="3"
                    id='step4'
                    checked={formStep === 3}
                    onChange={() => handleStepChange(3)}
                    />
                    <span className='control-desc'>4</span>
                </label>
            </div>
        </div>
    );
};

export default Sidebar