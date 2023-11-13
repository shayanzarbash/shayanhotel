import '../../app.css'
import { MdLocationOn } from 'react-icons/md';
import { HiCalendar, HiSearch } from 'react-icons/hi';
import { useState } from 'react';


const Header = () => {

    const [destination, setDestination] = useState('')

    return (
        <div className="header">
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <MdLocationOn className='headerIcon' />
                    <input
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        type="text"
                        placeholder='where to go?'
                        className='headerSearchInput'
                        name='destination'
                        id='destination'
                    />
                </div>
                <div className="headerSearchItem">
                    <HiCalendar className='headerIcon dateIcon' />
                    <div className='dateDropDown'>03/02/2024</div>
                    <span className="seprator"></span>
                </div>
                <div className="headerSearchItem">
                    <div id="optionDropDown">1 adult</div>
                    <span className="seprator"></span>
                </div>
                <div className="headerSearchItem">
                    <button className='headerSearchBtn'>
                        <HiSearch className='headerIcon' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;
