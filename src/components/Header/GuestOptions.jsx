import { useRef } from "react";
import OptionItem from "./OptionItem";
import useOutSideClick from "../../hooks/useOutSideClick";

const GuestOptions = ({ options, handlerOptions, setOpenOption }) => {

    const optionRef = useRef();

    useOutSideClick(optionRef, "optionDropDown", () => setOpenOption(false));

    return (
        <div className="guestOptions" ref={optionRef}>
            <OptionItem handlerOptions={handlerOptions} type="adult" options={options} minLimit={1} />
            <OptionItem handlerOptions={handlerOptions} type="children" options={options} minLimit={0} />
            <OptionItem handlerOptions={handlerOptions} type="room" options={options} minLimit={1} />
        </div>
    )
}

export default GuestOptions;
