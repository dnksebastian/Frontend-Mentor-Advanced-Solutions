import './selection.css'

import RockIcon from '../../assets/images/icon-rock.svg';
import PaperIcon from '../../assets/images/icon-paper.svg';
import ScissorsIcon from '../../assets/images/icon-scissors.svg';
import LizardIcon from '../../assets/images/icon-lizard.svg';
import SpockIcon from '../../assets/images/icon-spock.svg';


const Selection = ({ option, type }) => {

    const displayOption = () => {
        switch(option) {
            case 'paper':
                return <img src={PaperIcon} alt={`Icon of ${option}`}></img>
            case 'scissors':
                return <img src={ScissorsIcon} alt={`Icon of ${option}`}></img>
            case 'rock':
                return <img src={RockIcon} alt={`Icon of ${option}`}></img>
            case 'lizard':
                return <img src={LizardIcon} alt={`Icon of ${option}`}></img>
            case 'spock':
                return <img src={SpockIcon} alt={`Icon of ${option}`}></img>
            default:
                return null
        }
    };

    return (
        <div className={`selection-wrapper selection-${option} selection-${type}`}>
            <div className="selection-inner">
                    <div className="selection-icon-wrapper">
                        {displayOption()}
                    </div>
            </div>
        </div>
    );
};

export default Selection