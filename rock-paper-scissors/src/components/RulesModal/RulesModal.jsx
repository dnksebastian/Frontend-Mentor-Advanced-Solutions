import './rulesmodal.css'
import basicRules from '../../assets/images/image-rules.svg';
import bonusRules from '../../assets/images/image-rules-bonus.svg';

const RulesModal = ({ isBasicMode, onClose }) => {

    return (
        <div className='rules-wrapper'>
            <h1>Rules</h1>
            <div className="rules-img-wrap">
                {isBasicMode ? 
                <img className='rules-img' src={basicRules} alt="Rock Paper Scissors Rules" />
                :
                <img className='rules-img' src={bonusRules} alt="Rock Paper Scissors Lizard Spock Rules" />
            }
            </div>
            <button className='btn-modal' onClick={onClose}>Close rules modal</button>
        </div>
    );
};

export default RulesModal