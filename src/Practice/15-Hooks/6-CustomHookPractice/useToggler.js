import {useState} from "react"

//si no definimos el parametro defaultOnValue entonces es false por defecto
function useToggler(defaultOnValue = false) {
    const [isToggledOn, setIsToggledOn] = useState(defaultOnValue);

    const toggle = () => setIsToggledOn(preValue => !preValue);

    return {isToggledOn, toggle};
}

export default useToggler