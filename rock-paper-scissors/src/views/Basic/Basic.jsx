import './basic.css';
// import TriangleBG from '../../assets/images/bg-triangle.svg';
import Selection from '../../components/Selection/Selection'

const Basic = () => {

    return (
        <main className='basic-view-wrapper'>
            <div className="game-selections-wrapper">
                <Selection type='basic' option='paper' />
                <Selection type='basic' option='scissors' />
                <Selection type='basic' option='rock' />
                {/* <div className="bg-wrapper">
                    <img src={TriangleBG} alt="Triangle shape" />
                </div> */}
            </div>
        </main>
    );
};

export default Basic