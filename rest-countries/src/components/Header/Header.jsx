import './header.css';

const Header = ({theme, handleTheme}) => {

    return (
        <header>
            <p className='logo'>Where in the world?</p>
            {theme === 'light' ?
            <button onClick={handleTheme} className='btn btn-theme'><i className="fa-regular fa-moon"></i> Dark Mode</button>
            :
            <button onClick={handleTheme} className='btn btn-theme'><i className="fa-solid fa-moon"></i> Light Mode</button>
            }
        </header>
    );
};

export default Header