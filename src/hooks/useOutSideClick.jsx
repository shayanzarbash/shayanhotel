import { useEffect } from "react"

const useOutSideClick = (ref, exceptId, cb) => {



    useEffect(() => {

        function handleOutSideClick(e) {
            if (ref.current && !ref.current.contains(e.target) && e.target.id !== exceptId) {
                cb();
            }
        }

        document.addEventListener("mousedown", handleOutSideClick)

        return () => {
            document.removeEventListener("mousedown", handleOutSideClick)
        }
    }, [ref, exceptId, cb]);

    return (
        <div>useOutSideClick</div>
    )
}

export default useOutSideClick
