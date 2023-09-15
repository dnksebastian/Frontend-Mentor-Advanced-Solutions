import './bonus.css'
import Selection from '../../components/Selection/Selection'

const Bonus = () => {
    return (
        <main className="bonus-view-wrapper">
             <div className="game-selections-wrapper-bonus">
                <Selection type='bonus' option='paper' />
                <Selection type='bonus' option='scissors' />
                <Selection type='bonus' option='rock' />
                <Selection type='bonus' option='lizard' />
                <Selection type='bonus' option='spock' />
                {/* <div className="bg-wrapper">
                    <img src={TriangleBG} alt="Triangle shape" />
                </div> */}
            </div>
        </main>
    );
};

export default Bonus

