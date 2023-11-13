import { HiMinus, HiPlus } from "react-icons/hi";

const OptionItem = ({ type, options, minLimit, handlerOptions }) => {

    console.log(options);
    return (
        <div className="guestOptionItem">
            <span className="optionText">{type}</span>
            <div className="optionCounter"></div>
            <button
                onClick={() => handlerOptions(type, 'dec')}
                className="optionCounterBtn"
                disabled={options[type] <= minLimit}
            >
                <HiMinus className="icon" />
            </button>
            <span className="optionCounterNumber">{options[type]}</span>
            <button
                className="optionCounterBtn"
                onClick={() => handlerOptions(type, 'inc')}
            >
                <HiPlus className="icon" />
            </button>
        </div>
    )
}

export default OptionItem;
