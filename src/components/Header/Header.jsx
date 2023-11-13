import '../../app.css'
import { MdLocationOn } from 'react-icons/md';
import { HiCalendar, HiSearch } from 'react-icons/hi';
import { useState } from 'react';
import GuestOptions from './GuestOptions';

const Header = () => {

    const [destination, setDestination] = useState('');
    const [openOption, setOpenOption] = useState(false);
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    const handlerOptions = (name, opration) => {
        setOption((prev) => {
            return {
                ...prev,
                [name]: opration === 'inc' ? option[name] + 1 : option[name] - 1
            }
        })
    }

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
                    <div
                        id="optionDropDown"
                        onClick={() => setOpenOption(!openOption)}
                    >
                        {option.adult} adult {option.children} children {option.room} room
                    </div>
                    {openOption && <GuestOptions options={option} handlerOptions={handlerOptions} />}
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
