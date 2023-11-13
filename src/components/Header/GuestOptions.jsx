import OptionItem from "./OptionItem";

const GuestOptions = ({ options, handlerOptions }) => {
    return (
        <div className="guestOptions">
            <OptionItem handlerOptions={handlerOptions} type="adult" options={options} minLimit={1} />
            <OptionItem handlerOptions={handlerOptions} type="children" options={options} minLimit={0} />
            <OptionItem handlerOptions={handlerOptions} type="room" options={options} minLimit={1} />
        </div>
    )
}

export default GuestOptions;
