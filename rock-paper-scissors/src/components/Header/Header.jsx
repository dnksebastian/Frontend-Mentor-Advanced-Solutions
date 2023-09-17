import './header.css'
import Logo from '../../assets/images/logo.svg';
import BonusLogo from '../../assets/images/logo-bonus.svg';

const Header = ({ isBasicMode, gameScore }) => {

    return (
        <header>
            <div className="header-helper-wrap">
                <div className="header-logo-wrap">
                    {isBasicMode ?
                    <img src={Logo} alt="Rock, Paper, Scissors Logo" className="header-logo" />
                    :
                    <img src={BonusLogo} alt="Rock, Paper, Scissors, Lizard, Spock Logo" className="header-logo logo-bonus" />
                    }
                </div>
                <div className="header-score-wrap">
                    <span className="score-label">Score</span>
                    <span className='score-value'>{gameScore || 0}</span>
                </div>
            </div>
        </header>
    );
};

export default Header